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
          question: 'Convictions',
          answer: 'None'
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
          question: 'Convictions',
          answer: 'None'
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
          question: 'Convictions',
          answer: 'None'
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
          question: 'Convictions',
          answer: 'None'
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
          question: 'Convictions',
          answer: 'None'
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
          question: 'Convictions',
          answer: 'Felony'
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
          answer: 'Doctor'
        },
        {
          id: 'id2',
          question: 'Years of Experience',
          answer: 4
        },
        {
          id: 'id3',
          question: 'Convictions',
          answer: 'Misdemeanor'
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
