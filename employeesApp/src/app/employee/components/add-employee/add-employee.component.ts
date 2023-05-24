import { Component } from '@angular/core';
import { Employee } from '../../interfaces/employee.interfaces';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  public form: FormGroup;

  constructor(private service: EmployeeService, private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      role:['T', Validators.required],
      birthday:['']
    });
  }

  public formEmpty: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    document: ['', Validators.required],
    role:['T', Validators.required],
    birthday:['']
  });


  public response: string = "";

  saveEmployee(): void{
    if (this.form.valid) {
      this.service.addEmployee(this.form.value).subscribe({
        next: (emp) => {
          this.form = this.formEmpty;
          this.response = `Empleado registrado con ID: ${emp.id}`;
        }, 
        error: (err) => {
          this.form = this.formEmpty;
          this.response = `Error al registrar el empleado`;
        }
      });
    }
    else{
      alert("Campos requeridos sin diligenciar, verifique nuevamente")
    }

  }

}
