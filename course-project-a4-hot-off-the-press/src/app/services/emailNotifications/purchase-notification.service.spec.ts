import { inject, async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { PurchaseNotificationService } from './purchase-notification.service';

describe('PurchaseNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PurchaseNotificationService]
    });
  });

  it('should recieve success message from AWS Gateway', inject([PurchaseNotificationService], async (service:PurchaseNotificationService) => {
    const expectedMsg:string = "Sent email notification to: <INSERT EMAIL>";
    let msg = await service.sendNotification("purchaseNotificationTest", "bmbadasz@buffalo.edu", "Test-Album").toPromise();
    expect(msg).toEqual(expectedMsg);
  }));
});
