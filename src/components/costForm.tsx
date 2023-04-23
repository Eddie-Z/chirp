import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  image: FileList;
};

export const CostForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>(
    {
        defaultValues: {
          date: new Date().toISOString().split("T")[0],
        },
      }
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Expense</label>
        <input
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="lastName">Total Amount</label>
        <input
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <label htmlFor="date">Date:</label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input
              type="date"
              {...field}
              max={new Date().toISOString().split("T")[0]}
            />
          )}
        />
      <div>
      <div>
        <label htmlFor="image">Image:</label>
        <Controller
          control={control}
          name="image"
          render={({ field }) => (
            <input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
          )}
        />
      </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
