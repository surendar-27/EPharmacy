import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  loggedIn: boolean = true;
  cartCount: number = 3;
  username: string = 'JohnDoe';
  isDropdownOpen: boolean = false;
  credpage: boolean = true;

  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  constructor(private router: Router) {}
  

  gotoHome() {
    // Logic to navigate to home
    this.router.navigate(['/']);
  }

  cart() {
    // Logic to navigate to cart
    this.router.navigate(['/cart']);
  }

  dropdown() {
    // Logic for dropdown action
    console.log('Dropdown clicked');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Logic to log out the user
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetClass = (event.target as HTMLElement).className;
    console.log('Document clicked', targetClass );
    if (
      this.isDropdownOpen && targetClass !== 'dropdownbtn' && 
      targetClass !== 'dropdwn'
    ) {
      this.isDropdownOpen = false;
    }
  }

}
