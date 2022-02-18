import * as yup from 'yup';

export const clienteStoreSchema = yup.object({
  body: yup.object({
    nombres: yup
      .string()
      .required('El campo de nombres es requerido'),
    apellidos: yup
      .string()
      .required('El campo de apellidos es requerido'),
    fecha_nacimiento: yup
      .date()
      .required('El campo de fecha de nacimiento es requerido'),
  }),
});