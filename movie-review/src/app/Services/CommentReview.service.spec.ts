/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommentReviewService } from './CommentReview.service';

describe('Service: CommentReview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentReviewService]
    });
  });

  it('should ...', inject([CommentReviewService], (service: CommentReviewService) => {
    expect(service).toBeTruthy();
  }));
});
