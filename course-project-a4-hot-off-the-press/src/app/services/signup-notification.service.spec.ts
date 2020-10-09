import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SignupNotificationService } from './signup-notification.service';
import { doesNotReject } from 'assert';

describe('SignupNotificationService', () => {
  let service: SignupNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SignupNotificationService]
    });
    service = TestBed.inject(SignupNotificationService);
  });

  it('should recieve success message from AWS Gateway', (done) => {
    const expectedMsg:string = "Sent email notification to: bmbadasz@buffalo.edu";
    service.sendNotification("angServiceTest", "bmbadasz@buffalo.edu").subscribe(posts=> {
      expect(posts).toEqual(expectedMsg);
      done();
    });
  });
  
});
