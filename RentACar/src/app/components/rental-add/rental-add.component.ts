import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/modules/car';
import { Customer } from 'src/app/modules/customer';
import { Rental } from 'src/app/modules/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  @Input() car: Car;
  rentalAddForm: FormGroup;
  currentDate: Date = new Date()
  datePipe: DatePipe;
  rentDate: string | null;
  returnDate: string | null;
  customers: Customer[];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private rentalService: RentalService, private toastrService: ToastrService, private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.createRentalAddForm();
    this.getCustomers();

  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      carId: [this.car.id, Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: [null],
    });}
getCustomers(){
  this.customerService.getCustomers().subscribe(response=>{this.customers=response.data
  });

}
    add() {
      if(this.rentalAddForm.valid){
  
        let rentalModel = Object.assign({}, this.rentalAddForm.value);
        this.checkDate(rentalModel)
        this.calculatePayment(rentalModel)
        this.router.navigate(['/payment',JSON.stringify(rentalModel)]);
        this.toastrService.info('Ödeme sayfasına yönlendiriliyorsunuz.','Ödeme İşlemleri')
        //this.rentalService.add(rentalModel).subscribe(response=>{
       // this.toastrService.success("Başarılı","Kiralama İşlemi Tamamlandı")}
      
        
      
      }
      else{
      this.toastrService.error("Dikkat","Kiralanamadı, Formunuz Eksik")
      }
      
    }

calculatePayment(rental:Rental){
    
      if(rental.returnDate != null){
        var returnDate = new Date(rental.returnDate.toString());
        var rentDate = new Date(rental.rentDate.toString());
        var difference = returnDate.getTime() - rentDate.getTime();
  
        var rentDays = Math.ceil(difference / (1000 * 3600 * 24));
        
        rental.totalPrice = rentDays * this.car.dailyPrice;
  
        
        if(rental.totalPrice <= 0){
          this.router.navigate(['/cars']);
          this.toastrService.error('Ana sayfaya yönlendiriliyorsunuz','Hatalı işlem');
        }
      }
    }
    checkDate(rentalModel:Rental){
      let rentDate = new Date(rentalModel.rentDate);
        let returnDate = new Date(rentalModel.returnDate);
        if (rentDate < this.currentDate) {
          this.toastrService.warning(
             'Kiralama Tarihi, bu günden sonraki günler olmalıdır', 'Dikkat'
          );
          
       }
       if (returnDate < rentDate || returnDate.getDate() == rentDate.getDate()) {
        this.toastrService.warning(
           'Dönüş Tarihi, kiralama tarihinden sonraki günler olmalıdır', 'Dikkat'
        );
        
     }
  }



}
