import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  history = [
    {
      filename: "requirements.txt",
      date: "May 10, 2025",
      type: "User Stories",
    },
    {
      filename: "interview.mp3",
      date: "May 9, 2025",
      type: "Test Cases",
    },
    {
      filename: "product-demo.mp4",
      date: "May 8, 2025",
      type: "Custom Format",
    },
  ]
}
