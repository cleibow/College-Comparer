export class College {
Name: string;
City: string;
MinPrice: Number;
MaxPrice: Number;
Size: Number;
GreekLife: boolean;
YearFounded: Number;
Accreditor: string;
SubCampuses: string[];
GenderSegregation: genderSegregation;
GenderRation: Number;

}


enum genderSegregation {
  OnlyMale = 'only male',
  OnlyFemale = 'only female',
  Coed = 'Coed'
}
