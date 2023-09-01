import * as Yup from 'yup';

const dateOfBirthSchema = Yup.object().shape({
  dateOfBirth: Yup.string()
    .matches(
      /^(19|20)\d\d-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/,
      'Date must be in the format YYYY-MM-DD'
    )
    .test('minimumAge', 'Must be min 13 years old', (value) => {
      if (!value) return false; // Required field
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 13);
      const selectedDate = new Date(value);
      return selectedDate <= minAgeDate;
    })
    .required('Required'),
});
export default dateOfBirthSchema;
