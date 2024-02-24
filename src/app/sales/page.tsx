"use client";
import "./home.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  item: z.string().min(1).max(30),
  description: z.string().optional(),
  quantity: z.number().min(1),
  unit_price: z.number().min(1),
  total_price: z.number().min(1),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const watchQuantity = watch("quantity");
  const watchUnitPrice = watch("unit_price");

  useEffect(() => {
    setValue("total_price", watchQuantity * watchUnitPrice);
  }, [watchQuantity, watchUnitPrice]);

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <label>Item: </label>
      <input type="text" {...register("item")} />
      {errors.item && <span> {errors.item.message}</span>}

      <label>
        Description:
        <input type="text" {...register("description")} />
      </label>
      {errors.description && <span> {errors.description.message}</span>}

      <label>
        Quantity:
        <input
          type="number"
          {...register("quantity", { valueAsNumber: true })}
        />
      </label>
      {errors.quantity && <span> {errors.quantity.message}</span>}

      <label>
        Unit Price:
        <input
          type="number"
          {...register("unit_price", { valueAsNumber: true })}
        />
      </label>
      {errors.unit_price && <span> {errors.unit_price.message}</span>}

      <label>
        Total Price:
        <input type="number" {...register("total_price")} />
      </label>
      {errors.total_price && <span> {errors.total_price.message}</span>}

      <input type="submit" value="Submit" />
    </form>
  );
}
