import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberDetails: any[] = []

  constructor(private router: Router, private localService: LocalStorageService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMemberDetails();
  }

  getMemberDetails() {
    this.memberService.getMember().subscribe((res: any) => {
      this.memberDetails = res.result.users;
      alert("Member get successfully!")
    }, (error) => {
      alert(error.error.message);
    })
  }

  logout() {
    this.router.navigate(['/']);
    this.localService.removeItem('token');
    this.localService.removeAll();
  }

}
