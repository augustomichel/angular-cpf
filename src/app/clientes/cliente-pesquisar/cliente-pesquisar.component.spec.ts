import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePesquisarComponent } from './cliente-pesquisar.component';

describe('ClientePesquisarComponent', () => {
  let component: ClientePesquisarComponent;
  let fixture: ComponentFixture<ClientePesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePesquisarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
