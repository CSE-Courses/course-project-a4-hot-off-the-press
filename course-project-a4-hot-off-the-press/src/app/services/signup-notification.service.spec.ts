import { inject, async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SignupNotificationService } from './signup-notification.service';
import { doesNotReject } from 'assert';

describe('SignupNotificationService', async () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SignupNotificationService]
    });
  });

  it('should recieve success message from AWS Gateway', inject([SignupNotificationService], async (service:SignupNotificationService) => {
    const expectedMsg:string = "Sent email notification to: <INSERT EMAIL>";
    let msg = await service.sendNotification("signupNotificationTest", "<INSERT EMAIL>").toPromise();
    expect(msg).toEqual(expectedMsg);
  }));
  
});
