import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from '../../models/contactForm';
import Swal from 'sweetalert2';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  form!: FormGroup;
  referanceModel!: any;
  addressModel!: any;
  emailModel!: any;
  secondEmailModel!: any;
  phoneModel!: any;
  secondPhoneModel!: any;
  constructor(private contactService:ContactService, private settingService: SettingService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.contactForm();
    this.addressList();
    this.emailList();
    this.secondEmailList();
    this.phoneList();
    this.secondPhoneList();
  }
  phoneList() {
    this.settingService.getid("telefon", 1).subscribe(data => {
      this.phoneModel = data;
    })
  }
  secondPhoneList() {
    this.settingService.getid("telefon2", 1).subscribe(data => {
      this.secondPhoneModel = data;
    })
  }
  emailList() {
    this.settingService.getid("mail", 1).subscribe(data => {
      this.emailModel = data;
    })
  }
  secondEmailList() {
    this.settingService.getid("mail2", 1).subscribe(data => {
      this.secondEmailModel = data;
    })
  }
  addressList() {
    this.settingService.getid("adres", 1).subscribe(data => {
      this.addressModel = data;
    })
  }
  //İletişim Formu
  contactForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  submitForm() {
    console.log(this.form)
    if (this.form.valid) {
      const contactForm: ContactForm = Object.assign(this.form.value);
      Swal.fire({
        title: 'Talebiniz gönderilsin mi?',
        showDenyButton: true,
        confirmButtonText: 'Evet', confirmButtonColor: "#238dc1",
        denyButtonText: `Hayır`, denyButtonColor: "#b47f00",
      }).then((response) => {
        if (response.isConfirmed) {
          this.contactService.communicationSend(contactForm).subscribe((data: any) => {
            if (data) {
              Swal.fire({
                title: 'Başarılı',
                text: 'Your contact request has been received...',
                icon: 'success', iconColor: "#662d91",
                confirmButtonText: 'Tamam', confirmButtonColor: "#72C6EF",
              }).then(function (result) {
                if (result.value) {
                  window.location.href = '/pages/contact-us';
                }
              })
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Fill in contact information',
        icon: 'warning', iconColor: "#72C6EF",
        confirmButtonText: 'Ok', confirmButtonColor: "#662D91",
      })
    }
  }
}