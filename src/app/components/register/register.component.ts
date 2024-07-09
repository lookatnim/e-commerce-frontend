import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Add userRole: 2 to form value
      const formData = { ...this.registrationForm.value, userRole: 2 };
  
      // Implement registration logic here (e.g., call API)
      console.log('Form Submitted', formData);
  
      // Example: Call your registration service
      // this.authService.register(formData).subscribe(
      //   (response) => {
      //     console.log('Registration successful', response);
      //     // Optionally, redirect or show success message
      //   },
      //   (error) => {
      //     console.error('Registration failed', error);
      //     // Handle error scenario
      //   }
      // );
    }
  }
  
}
