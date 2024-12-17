import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDetailLangagesComponent } from './affiche-detail-langages.component';

describe('AfficheDetailLangagesComponent', () => {
  let component: AfficheDetailLangagesComponent;
  let fixture: ComponentFixture<AfficheDetailLangagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficheDetailLangagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheDetailLangagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
