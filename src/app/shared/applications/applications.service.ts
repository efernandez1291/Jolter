import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Injectable()
export class ApplicationsService {
  
  // TODO Make an Applications Model and set type as a model.
  public applications: any = [
    {
      name: 'Bob Walters',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Web Developer'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 5
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'Angular'
        }
      ]
    },
    {
      name: 'Joe Swazy',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Web Developer'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 3
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'C++'
        }
      ]
    },
    {
      name: 'Lisa Yen',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Web Developer'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 4
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'Java'
        }
      ]
    },
    {
      name: 'Ken Block',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Web Developer'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 3
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'Drifting'
        }
      ]
    },
    {
      name: 'Sue Ann',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Construction'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 4
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'Rollerblading'
        }
      ]
    },
    {
      name: 'Jim Jobe',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Doctor'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 3
        },
        {
          id: 'id3',
          question: 'Tope Skill',
          answer: 'Im a brain Surgoen'
        }
      ]
    },
    {
      name: 'Regina Douglas',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Gym Instructor'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 1
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'Definitely Pushups'
        }
      ]
    },
    {
      name: 'Mongo Ride',
      applicationId: 200,
      manager: 'Manager001',
      questions: [
        {
          id: 'id1',
          question: 'Current Occupation',
          answer: 'Biologist'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 4
        },
        {
          id: 'id3',
          question: 'Top Skill',
          answer: 'Pokemon Go'
        }
      ]
    }
  ]

  constructor() { 
  }

  public getApplications() {
    return Observable.of(this.applications)
      .map( (applications) => applications );
  }

}
