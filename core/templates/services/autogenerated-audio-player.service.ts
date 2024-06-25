// Copyright 2017 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Service to operate the playback of autogenerated audio
 * using the SpeechSynthesis API.
 */

import {Injectable} from '@angular/core';
import {downgradeInjectable} from '@angular/upgrade/static';

import {SpeechSynthesisChunkerService} from 'services/speech-synthesis-chunker.service';

@Injectable({
  providedIn: 'root',
})
export class AutogeneratedAudioPlayerService {
  constructor(
    private speechSynthesisChunkerService: SpeechSynthesisChunkerService
  ) {}

  DEFAULT_PLAYBACK_RATE: number = 0.92;
  DEFAULT_PLAYBACK_VOLUME: number = 1;

  // Not all browsers support SpeechSynthesisUtterance, so we need the
  // check to prevent a "SpeechSynthesisUtterance is not defined" error.
  _speechSynthesis: SpeechSynthesis | null = window.hasOwnProperty(
    'speechSynthesis'
  )
    ? window.speechSynthesis
    : null;

  utterance: SpeechSynthesisUtterance | null = window.hasOwnProperty(
    'speechSynthesis'
  )
    ? new SpeechSynthesisUtterance()
    : null;

  _play(
    html: string,
    language: string,
    audioFinishedCallback: () => void
  ): void {
    this.speechSynthesisChunkerService.cancel();
    if (this.utterance === null) {
      return;
    }
    var message =
      this.speechSynthesisChunkerService.convertToSpeakableText(html);
    this.utterance.text = message;
    this.utterance.lang = language;
    this.utterance.rate = this.DEFAULT_PLAYBACK_RATE;
    this.utterance.volume = this.DEFAULT_PLAYBACK_VOLUME;
    this.speechSynthesisChunkerService.speak(this.utterance, () => {
      audioFinishedCallback();
    });
  }

  play(
    html: string,
    language: string,
    audioFinishedCallback: () => void
  ): void {
    return this._play(html, language, audioFinishedCallback);
  }

  cancel(): void {
    this.speechSynthesisChunkerService.cancel();
  }

  isPlaying(): boolean {
    return Boolean(this._speechSynthesis && this._speechSynthesis.speaking);
  }
}

angular
  .module('oppia')
  .factory(
    'AutogeneratedAudioPlayerService',
    downgradeInjectable(AutogeneratedAudioPlayerService)
  );
