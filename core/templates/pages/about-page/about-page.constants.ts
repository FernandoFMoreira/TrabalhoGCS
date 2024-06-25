// Copyright 2020 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Constants for the Oppia about page.
 */

export const AboutPageConstants = {
  // These credits should not be changed directly. If any change is
  // made to structure/formatting, the respective constants
  // CREDITS_START_LINE, CREDITS_END_LINE and CREDITS_INDENT should be
  // updated in update_changelog_and_credits.py file. If the patterns do
  // not match, update_changelog_and_credits_test will fail.
  CREDITS_CONSTANTS: [
    'Aadya Mishra',
    'Aakanksha Bhende',
    'Aakash Jakhmola',
    'Aaron Zuspan',
    'Aashish Gaba',
    'Aashish Khubchandani',
    'Aashish Singh',
    'Aasif Faizal',
    'Aayush Kumar Singh',
    'Abeer Khan',
    'Abhay Garg',
    'Abhay Gupta',
    'Abhay Raghuwanshi',
    'Abhay Raizada',
    'Abhijit Suresh',
    'Abhimanyu Thakre',
    'Abhishek Arya',
    'Abhishek Kumar',
    'Abhishek Shakya',
    'Abhishek Sultaniya',
    'Abhishek Uniyal',
    'Abhith Krishna',
    'Abraham Mgowano',
    'Acash Mkj',
    'Adam Halim',
    'Adarsh Gupta',
    'Adarsh Kumar',
    'Aditya Dubey',
    'Aditya Jain',
    'Aditya Narayanm',
    'Aditya Rai',
    'Aditya Sharma',
    'Aditya Singh',
    'Adrija Acharyya',
    'Ahmed Bhouri',
    'Aishik Bhattacharya',
    'Aishwary Saxena',
    'Ajay Gurjar',
    'Ajay Sharma',
    'Ajo John',
    'Akash Gupta',
    'Akash Jaiswal',
    'Akash Paloju',
    'Akhilesh Kumar Yadav',
    'Akhilesh Ratnakumar',
    'Akiti Bala',
    'Akshath Kaushal',
    'Akshay Anand',
    'Akshay M Joshi',
    'Akshay Nandwana',
    'Alex Chong',
    'Alex Gower',
    'Alex Lee',
    'Alexandra Wu',
    'Allan Zhou',
    'Allison Goldstein',
    'Alluri Harshit Varma',
    'Amaan Lari',
    'Aman Singh Jolly',
    'Amanda Rodriguez',
    'Amey Kudari',
    'Amit Deutsch',
    'Amit Panwar',
    'Amulya Kumar',
    'Amy Yeung',
    'Ana Francisca Bernardo',
    'Anant Chaudhary',
    'Ananth Raghav',
    'Andrew Low',
    'Andrey Mironyuk',
    'Angela Park',
    'Anggoro Dewanto',
    'Anish Kshirsagar',
    'Anish V Badri',
    'Ankita Saxena',
    'Anmol Mittal',
    'Anmol Shukla',
    'Anshul Hudda',
    'Anshuman Maurya',
    'Anthony Alridge',
    'Anthony Zheng',
    'Anthony Zhu',
    'Anubhav Sinha',
    'Anumeha Agrawal',
    'Anurag Singh',
    'Anurag Thakur',
    'Anurag Vats',
    'Anurag Verma',
    'Apurv Bajaj',
    'Apurv Botle',
    'Archi Aggarwal',
    'Areesha Tariq',
    'Arian Hadi',
    'Ariel Cohen',
    'Arjun Thakur',
    'Arkadyuti Bandyopadhyay',
    'Armaan Singh Dhillon',
    'Arnesh Agrawal',
    'Arpan Banerjee',
    'Arpan Gupta',
    'Arpit Bandejiya',
    'Arun Kumar',
    'Arunabh Ghosh',
    'Aryaman Gupta',
    'Ashish Patwal',
    'Ashish Verma',
    'Ashmeet Singh',
    'Ashutosh Chauhan',
    'Ashutosh Singla',
    'Ashwath Kannan',
    'Ashwath V A',
    'Asif Sheriff',
    'Assem Yeskabyl',
    'Aubrey Wells',
    'Aung Hein Oo',
    'Austin Choi',
    'Ava Gizoni',
    'Avijit Gupta',
    'Ayush Anand',
    'Ayush Jain',
    'Ayush Jha',
    'Ayush Kumar',
    'Ayush Nandi',
    'Ayush Rochlani',
    'Baiba Skujevska',
    'Barnabas Makonda',
    'Ben Henning',
    'Ben Targan',
    'Benjamin Beeshma',
    'Bhavuk Jain',
    'Bill Morrisson',
    'BJ Voth',
    'Bolaji Fatade',
    'Boyd Y. Ching',
    'Brenton Briggs',
    'Brian Lin',
    'Brian Rodriguez',
    'Brijmohan Siyag',
    'Cary Xiao',
    'Cathleen Huang',
    'Charisse De Torres',
    'Chase Albert',
    'Chen Shenyue',
    'Chin Zhan Xiong',
    'Chirag Baid',
    'Chris Skalnik',
    'Christie Ho',
    'Christopher Tao',
    'Cihan Bebek',
    'Cindy Qu',
    'Connie Chow',
    'Corey Hunter',
    'Céline Deknop',
    'Darin Nguyen',
    'Darsuu',
    'David Cheng',
    'Dawson Eliasen',
    'Debanshu Bhaumik',
    'Deepam Banerjee',
    'Deepank Agarwal',
    'Denis Samokhvalov',
    'Dev Prajapat',
    'Devi Sandeep',
    'Dhairya Majmudar',
    'Dharmesh Poddar',
    'Dhruv Rishishwar',
    'Diana Chen',
    'Dipto Chakrabarty',
    'Divyadeep Singh',
    'Divyansh Khetan',
    'Domenico Vitarella',
    'Dong Wook Brian Chung',
    'Dorian Bouchard',
    'Edward Allison',
    'Eesha Arif',
    'Elizabeth Kemp',
    'Emil Brynielsson',
    'Emily Glue',
    "Eric L'Heureux",
    'Eric Lou',
    'Eric Yang',
    'Eshaan Aggarwal',
    'Estelle Lee',
    'Fang You',
    'Farees Hussain',
    'Felicity Zhao',
    'Florin Balint',
    'Francois Gonothi Toure',
    'Frederik Creemers',
    'Fumbani Banda',
    'Fumiya Goto',
    'Gabriel Fuentes',
    'Gagan Suneja',
    'Gangavarapu Praneeth',
    'Gautam Suri',
    'Gautam Verma',
    'Geet Choudhary',
    'Geo Jolly',
    'Gopi Vaibhav',
    'Gourav Singh',
    'Grace Guo',
    'Guilherme Gago',
    'Gustav Stappe Renner',
    'Hadyn Fitzgerald',
    'Hamlet Villa',
    'Hamza Chandad',
    'Han Trinh',
    'Hanan Mufti',
    'Hardik Goyal',
    'Hardik Katehara',
    'Haresh Khanna',
    'Harsh Keshari',
    'Harsh Khajuria',
    'Harsh Khilawala',
    'Harshvardhan Singh',
    'Hasitha Kaushan',
    'Hema Sundara Rao Ginni',
    'Hemant M Mehta',
    'Henriette Hettinga',
    'Henry Phu',
    'Himanshu Aggarwal',
    'Himanshu Dixit',
    'Hitesh Sharma',
    'Hitesh Tomar',
    'Hope Ngerebara',
    'Hossam Mohammed Alsheikh',
    'Huong Le',
    'Ian Luttrell',
    'Ishan Kamboj',
    'Ishan Shanware',
    'Ishan Singh',
    'Jackson Wu',
    'Jacob Davis',
    'Jacob Li Peng Cheng',
    'Jacque Li',
    'Jaideep Sharma',
    'Jaimin Purohit',
    'Jairo Honorio',
    'Jake Block',
    'Jakub Osika',
    'James James John',
    'James Xu',
    'Jamie Lau',
    'Jansen Yan',
    'Jared Silver',
    'Jasmine Rider',
    'Jasper Deng',
    'Jaswinder Singh',
    'Jaxon Gates',
    'Jay Vivarekar',
    'Jayam Patel',
    'Jayasanka Madhawa',
    'Jayprahash Sharma',
    'Jayprakash Sharma',
    'Jaysinh Shukla',
    'Jeevesh Garg',
    'Jenna Mandel',
    'Jennifer Chen',
    'Jeremy Emerson',
    'Jerry Chen',
    'Jerry Lau',
    'Jessica Li',
    'Jian Fu',
    'Jiazhi Chen',
    'Jim Zhan',
    'Joao Manuel Carvalho Manita',
    'Joel Lau',
    'Jogendra Singh',
    'John Glennon',
    'John Karasinski',
    'John Prince Mesape',
    'Jonathan D Lake',
    'Jonathan Slaton',
    'Jordan Cockles',
    'Jordan Stapinski',
    'Joseph Fedota',
    'Joshua Cano',
    'Joshua Lan',
    'Joshua Lusk',
    'Joydeep Mukherjee',
    'Juan Saba',
    'Justin Du',
    'Justin Nguyen',
    'Jérôme',
    'K.N. Anantha Nandanan',
    'Kaicheng Han',
    'Kajol Kumari',
    'Kamal Nayan',
    'Kanugu Rajesh',
    'Kapil Agarwal',
    'Karen Honorio',
    'Karen Rustad',
    'Karina Zhang',
    'Karishma Vanwari',
    'Karri Abhinav',
    'Kartikey Pandey',
    'Kashif Jamal Soofi',
    'Kashish Bhandula',
    'Kate Perkins',
    'Kathryn Patterson',
    'Kayla Hardie',
    'Kefeh Collins',
    'Kenneth Ho',
    'Kerry Wang',
    'Keshav Bathla',
    'Keshav Gupta',
    'Kevin Choong',
    'Kevin Conner',
    'Kevin Lee',
    'Kevin Thomas',
    'Kevin Zhang',
    'Khushi Gangopadhyay',
    'Kiran Konduru',
    'Kishan Kumar',
    'Koji Ashida',
    'Konstantinos Kagkelidis',
    'Krishanu Saha',
    'Krishita Jain',
    'Krishna Rao',
    'Kristin Anthony',
    'Kshitij Patil',
    'Kumari Shalini',
    'Kunal Garg',
    'Kyriaki Velliniati',
    'Lakshay Angrish',
    'Lara Davies',
    'Lara Heidenwag',
    'Laura Kinkead',
    'Leah Goldberg',
    'Lev Bernstein',
    'Leyla Tuon Cao',
    'Linn Hallonqvist',
    'Lontsi Jordan',
    'Lorrany Azevedo',
    'Luana Ferraz',
    'Lucklita Theng',
    'Luis Ulloa',
    'Luiz D. M. Mainart',
    'Lunrong Chen',
    'Luyao Jin',
    'Madhav Sainanee',
    'Madhavaram Rishitha',
    'Madiyar Aitbayev',
    'Mahendra Suthar',
    'Mai Elshiashi',
    'Mamat Rahmat',
    'Manan Rathi',
    'Manas Tungare',
    'Manish Roy',
    'Manoj Mohan',
    'Marcel Schmittfull',
    'Mariana Zangrossi',
    'Mark Cabanero',
    'Mark Halpin',
    'Martin Smithurst',
    'Matt Higgins',
    'Matthew Sumpter',
    'Mattias Erlingson',
    'Maurício Meneghini Fauth',
    'Md Rabbani',
    'Md Shahbaz Alam',
    'Meet Vyas',
    'Merry Shen',
    'Mert Degirmenci',
    'Michael Anuzis',
    'Michael Mossey',
    'Michael Orwin',
    'Michael Wagner',
    'Michael Wu',
    'Michelle R',
    'Milagro Teruel',
    'Min Tan',
    'Mohamed Elsayed',
    'Mohammad Shahebaz',
    'Mohammad Zaman',
    'Mohit Balwani',
    'Mohit Gupta',
    'Mohit Musaddi',
    'Mohith Khatri',
    'Mortaza Aghazadah',
    'Mozammel Haque',
    'Mridul Setia',
    'Mungo Dewar',
    'Nadin Tamer',
    'Nalin Bhardwaj',
    'Nalin Chhibber',
    'Naman Kalra',
    'Namuli Joyce',
    'Naveen Kumar Shukla',
    'Netaji Kancharapu',
    'Nicolas Skirkey',
    'Nikhil Agarwal',
    'Nikhil Handa',
    'Nikhil Nair',
    'Nikhil Prakash',
    'Nikhil Sangwan',
    'Nikita Vorobev',
    'Nikki Hess',
    'Nils Johansson',
    'Nimalen Sivapalan',
    'Nisarg Chaudhari',
    'Nischaya Sharma',
    'Nishant Mittal',
    'Nisheal John',
    'Nitanshu Lokhande',
    'Nithesh N. Hariharan',
    'Nitish Bansal',
    'Omshi Samal',
    'Oskar Cieslik',
    'Oswell Chan',
    'Owen Parry',
    'Ozan Filiz',
    'P Venkat Arvind',
    'Paloma Oliveira',
    'Pankaj Dahiya',
    'Pankaj Prajapati',
    'Pankaj Singh',
    'Parth Bhoiwala',
    'Parul Priyedarshani',
    'Patel Muhammad',
    'Patrycja Praczyk',
    'Pawan Rai',
    'Pawel Borkar',
    'Phil Wagner',
    'Philip Hayes',
    'Phillip Moulton',
    'Pirajesh M R',
    'Piyush Agrawal',
    'Praful Bandre',
    'Prakash Subedi',
    'Pranav Siddharth S',
    'Pranshu Srivastava',
    'Prasanna Patil',
    'Prateek Kumar',
    'Pratik Katte',
    'Prayush Dawda',
    'Preetam Mondal',
    'Princika Rai',
    'Pritam Singh',
    'Priyansh Mehta',
    'Prottoy Chakraborty',
    'Pulkit Aggarwal',
    'Pulkit Agrawal',
    'Pulkit Gera',
    'Purhan',
    'Purvi Misal',
    'Qifei Wu',
    'Qinghao Yang',
    'Radesh Kumar',
    'Rafay Ghafoor',
    'Rafał Kaszuba',
    'Rahat',
    'Rahul Gurung',
    'Rahul Lalwani',
    'Rahul Modi',
    'Raine Hoover',
    'Rajan Garg',
    'Rajat Kumar',
    'Rajat Patwa',
    'Rajat Talesra',
    'Rajendra Kadam',
    'Rajitha Warusavitarana',
    'Rakshit Kumar',
    'Ramin Izadpanah',
    'Ramon Valdivia',
    'Ravi Dalal',
    'Raymond Tso',
    'Rebekah Houser',
    'Reinaldo Aguiar',
    'Renato Martins',
    'Reshu Kumari',
    'Reto Brunner',
    'Ria Arora',
    'Ricardo Pereira',
    'Richard Cho',
    'Rijuta Singh',
    'Rishabh Rawat',
    'Rishav Chakraborty',
    'Rishi Kejriwal',
    'Ritik Kumar',
    'Rizky Riyaldhi',
    'Robert Moreno Carrillo',
    'Rohan Batra',
    'Rohan Gulati',
    'Rohit Gupta',
    'Rohit Katlaa',
    'Ross Strader',
    'Rudra Sadhu',
    'Rémi Gourdon',
    'Sachin Chauhan',
    'Sachin Gopal',
    'Sachin Kumar',
    'Saeed Jassani',
    'Safwan Mansuri',
    'Sagang Wee',
    'Sagar Manohar',
    'Sagar Subedi',
    'Sahil Gupta',
    'Sahil Jhangar',
    'Sahil Singh',
    'Sajal Asati',
    'Sajen Sarvajith',
    'Sajna Kadalikat',
    'Sakshi Jain',
    'Samara Trilling',
    'Sambhav Kaushik',
    'Samriddhi Mishra',
    'Sandeep Dubey',
    'Sandeep Patel',
    'Sanjana Konte',
    'Sanjay Saju Jacob',
    'Sankranti Joshi',
    'Santos Hernandez',
    'Sanyam Khurana',
    'Sasa Cocic-Banjanac',
    'Satish Boggarapu',
    'Satmeet Ubhi',
    'Satvik Mishra',
    'Satwik Kansal',
    'Satyam Bhalla',
    'Satyam Wakchaure',
    'Satyam Yadav',
    'Saurabh Balke',
    'Saurabh Jamadagni',
    'Saurav Pratihar',
    'Savitha K Jayasankar',
    'Scott Brenner',
    'Scott Junner',
    'Scott Roberts',
    'Sean Anthony Riordan',
    'Sean Lip',
    'Sean Zhong',
    'Sebastian Zangaro',
    'Seoeun Hong',
    'Seth Beckman',
    'Seth Saloni',
    'Shafqat Dulal',
    'Shan Jiang',
    'Shantanu Bhowmik',
    'Sharif Shaker',
    'Shiori Nozawa',
    'Shiqi Wu',
    'Shitong Shou',
    'Shiva Krishna Yadav',
    'Shivam Chaudhary',
    'Shivam Jha',
    'Shivan Trivedi',
    'Shivanandan D N',
    'Shivang Sharma',
    'Shivansh Bajaj',
    'Shivansh Dhiman',
    'Shivansh Rakesh',
    'Shivkant Chauhan',
    'Shobhan Srivastava',
    'Shouvik Roy',
    'Shrijal Acharya',
    'Shriya Kamat Tarcar',
    'Shruti Grover',
    'Shruti Satish',
    'Shubha Gupta',
    'Shubha Rajan',
    'Shubham Bansal',
    'Shubham Korde',
    'Shubham Thakur',
    'Shun Nagasaki',
    'Shuta Suzuki',
    'Siddhant Khandelwal',
    'Siddhant Srivastav',
    'Siddharth Batra',
    'Siddharth Mehta',
    'Simran Mahindrakar',
    'Sneha Chauhan',
    'Sougata Das',
    'Souhit Dey',
    'Soumyajyoti Dey',
    'Soumyo Dey',
    'Sourab Jha',
    'Sourav Badami',
    'Sourav Singh',
    'Sreelaya Vuyyuru',
    'Sreenivasulu Giritheja',
    'Srijan Reddy',
    'Srikanth Kadaba',
    'Srikar Ch',
    'Srikrishna Bethina',
    'Stefanie Muroya Lei',
    'Stephanie Federwisch',
    'Stephen Chiang',
    'Stephen Hannon',
    'Stephen Yu',
    'Steve Jiang',
    'Steven Godfrey',
    'SUBHASH THENUA',
    'Subhash',
    'Subin Duresh',
    'Subodh Verma',
    'Sudhanva MG',
    'Sudipta Gyan Prakash Pradhan',
    'Sujay Dey',
    'Sumit Paroothi',
    'Sumit Singh',
    'Surya Siriki',
    'Swetha Sekhar',
    'Taiwo Adetona',
    'Tanishq Gupta',
    'Tanmay Mathur',
    'Tanya Agarwal',
    'Tarashish Mishra',
    'Taylor Murray',
    'Ted Tong Li',
    'Teddy Marchildon',
    'Tezuesh Varshney',
    'Tham Wan Jun',
    'Theo Lipeles',
    'Tia Jin',
    'Tianqi Wu',
    'Timothy Cyrus',
    'Tom Zinck',
    'Tonatiuh Garcia',
    'Tony Afula',
    'Tony Jiang',
    'Tracy Homer',
    'Tran Quang Khai',
    'Travis Shafer',
    'Trianna Nguyen',
    'Truong Kim',
    'Tuguldur Baigalmaa',
    'Tushar Mohan',
    'Tyler Ishikawa',
    'Ujjwal Gulecha',
    'Umesh Singla',
    'Utkarsh Dixit',
    'Vaibhav Tripathi',
    'Valeron Toscano',
    'Vansh Gawra',
    'Varazdat Manukyan',
    'Varun Tandon',
    'Vasu Tomar',
    'Vedant Borkar',
    'Vedika Chandra',
    'Vibhor Agarwal',
    'Viet Tran Quoc Hoang',
    'Vijay Patel',
    'Viktor Pishuk',
    'Vinayak Vishwanath Gosain',
    'Vinit Dantkale',
    'Vinita Murthi',
    'Vir Kothari',
    'Viraj Prabhu',
    'Vishal Desai',
    'Vishal Gupta',
    'Vishal Joisar',
    'Vishal Teotia',
    'Vishnu M',
    'Vishnu Nithin Reddy',
    'Vojtěch Jelínek',
    'Vuyisile Ndlovu',
    'Wiktor Idzikowski',
    'Will Li',
    'Wilson Hong',
    'Winnie',
    'Wonje Lee',
    'Xinyu Wu',
    'Xuân (Sean) Lương',
    'Y. Budhachandra Singh',
    'Yana Malysheva',
    'Yang Lu',
    'Yash Dugriyal',
    'Yash Jipkate',
    'Yash Ladha',
    'Yash Santosh Kandalkar',
    'Yashwardhan Jyani',
    'Yavik Kapadia',
    'Yi Yan',
    'Yijia Gao',
    'Yiming Pan',
    'Yogesh Saini',
    'Yogesh Sharma',
    'Yong Li',
    'Yousef Hamza',
    'Yuan Gu',
    'Yuecheng Cao',
    'Yuliang',
    'Yuri Lemos',
    'Yuri Pennafort Lemos',
    'Zach Puller',
    'Zach Wiebesiek',
    'Zachery Vekovius',
    'Zaid Ismail',
    'Zhan Liang',
    'Zhu Chu',
    'Zoe Madden-Wood',
  ],
} as const;
