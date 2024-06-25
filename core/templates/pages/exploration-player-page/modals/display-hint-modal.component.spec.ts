// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for DisplayHintModalComponent.
 */

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RecordedVoiceovers} from 'domain/exploration/recorded-voiceovers.model';
import {SubtitledHtml} from 'domain/exploration/subtitled-html.model';
import {StateCard} from 'domain/state_card/state-card.model';
import {AudioPlayerService} from 'services/audio-player.service';
import {AutogeneratedAudioPlayerService} from 'services/autogenerated-audio-player.service';
import {AudioTranslationManagerService} from '../services/audio-translation-manager.service';
import {HintsAndSolutionManagerService} from '../services/hints-and-solution-manager.service';
import {PlayerPositionService} from '../services/player-position.service';
import {PlayerTranscriptService} from '../services/player-transcript.service';
import {DisplayHintModalComponent} from './display-hint-modal.component';
import {MockTranslatePipe} from 'tests/unit-test-utils';
import {Interaction} from 'domain/exploration/InteractionObjectFactory';
import {AudioTranslationLanguageService} from '../services/audio-translation-language.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Display hint modal', () => {
  let fixture: ComponentFixture<DisplayHintModalComponent>;
  let componentInstance: DisplayHintModalComponent;
  let hintsAndSolutionManagerService: HintsAndSolutionManagerService;
  let playerTranscriptService: PlayerTranscriptService;
  let audioTranslationManagerService: AudioTranslationManagerService;
  let audioPlayerService: AudioPlayerService;
  let autogeneratedAudioPlayerService: AutogeneratedAudioPlayerService;
  let ngbActiveModal: NgbActiveModal;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DisplayHintModalComponent, MockTranslatePipe],
      providers: [
        NgbActiveModal,
        AudioPlayerService,
        AudioTranslationManagerService,
        AutogeneratedAudioPlayerService,
        HintsAndSolutionManagerService,
        PlayerPositionService,
        PlayerTranscriptService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHintModalComponent);
    componentInstance = fixture.componentInstance;
    hintsAndSolutionManagerService = TestBed.inject(
      HintsAndSolutionManagerService
    );
    playerTranscriptService = TestBed.inject(PlayerTranscriptService);
    audioTranslationManagerService = TestBed.inject(
      AudioTranslationManagerService
    );
    audioPlayerService = TestBed.inject(AudioPlayerService);
    autogeneratedAudioPlayerService = TestBed.inject(
      AutogeneratedAudioPlayerService
    );
    ngbActiveModal = TestBed.inject(NgbActiveModal);
  });

  it('should create', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should intialize', () => {
    let contentId: string = 'content_id';
    let recordedVoiceovers = new RecordedVoiceovers({});
    let hint = new SubtitledHtml('html', contentId);
    let displayedCard = new StateCard(
      'test_name',
      'content',
      'interaction',
      {} as Interaction,
      [],
      recordedVoiceovers,
      contentId,
      {} as AudioTranslationLanguageService
    );
    spyOn(hintsAndSolutionManagerService, 'displayHint').and.returnValue(hint);
    spyOn(playerTranscriptService, 'getCard').and.returnValue(displayedCard);
    spyOn(audioTranslationManagerService, 'setSecondaryAudioTranslations');
    spyOn(audioPlayerService.onAutoplayAudio, 'emit');

    componentInstance.ngOnInit();

    expect(componentInstance.hint).toEqual(hint);
    expect(componentInstance.displayedCard).toEqual(displayedCard);
    expect(componentInstance.recordedVoiceovers).toEqual(
      displayedCard.getRecordedVoiceovers()
    );
    expect(componentInstance.hintContentId).toEqual(contentId);
    expect(
      audioTranslationManagerService.setSecondaryAudioTranslations
    ).toHaveBeenCalled();
    expect(audioPlayerService.onAutoplayAudio.emit).toHaveBeenCalled();
  });

  it('should throw error if display hint is invalid', () => {
    spyOn(hintsAndSolutionManagerService, 'displayHint').and.returnValue(null);

    expect(() => {
      componentInstance.ngOnInit();
    }).toThrowError('Hint not found.');
  });

  it('should throw error if content id is invalid', () => {
    let contentId: string = 'content_id';
    let recordedVoiceovers = new RecordedVoiceovers({});
    let hint = new SubtitledHtml('html', null);
    let displayedCard = new StateCard(
      'test_name',
      'content',
      'interaction',
      {} as Interaction,
      [],
      recordedVoiceovers,
      contentId,
      {} as AudioTranslationLanguageService
    );
    spyOn(hintsAndSolutionManagerService, 'displayHint').and.returnValue(hint);
    spyOn(playerTranscriptService, 'getCard').and.returnValue(displayedCard);
    spyOn(audioTranslationManagerService, 'setSecondaryAudioTranslations');
    spyOn(audioPlayerService.onAutoplayAudio, 'emit');

    expect(() => {
      componentInstance.ngOnInit();
    }).toThrowError('Content id not found.');
  });

  it('should close modal', () => {
    spyOn(audioPlayerService, 'stop');
    spyOn(autogeneratedAudioPlayerService, 'cancel');
    spyOn(audioTranslationManagerService, 'clearSecondaryAudioTranslations');
    spyOn(ngbActiveModal, 'dismiss');

    componentInstance.closeModal();

    expect(audioPlayerService.stop).toHaveBeenCalled();
    expect(autogeneratedAudioPlayerService.cancel).toHaveBeenCalled();
    expect(
      audioTranslationManagerService.clearSecondaryAudioTranslations
    ).toHaveBeenCalled();
    expect(ngbActiveModal.dismiss).toHaveBeenCalledWith('cancel');
  });
});
