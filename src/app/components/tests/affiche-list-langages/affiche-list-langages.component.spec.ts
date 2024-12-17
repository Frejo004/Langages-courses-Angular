import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheListLangagesComponent } from './affiche-list-langages.component';

describe('AfficheListLangagesComponent', () => {
  let component: AfficheListLangagesComponent;
  let fixture: ComponentFixture<AfficheListLangagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficheListLangagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheListLangagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
