// https://uibakery.io/regex-library/phone-number

import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const navigation = useNavigation();
  const formErrors = useActionData() as any;

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="mx-5 my-10">
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <div>
            <input
              className="form-input"
              type="text"
              name="customer"
              required
            />
          </div>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="form-input" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <span>
              <h5 style={{ color: "red" }}>{formErrors.phone}</h5>
            </span>
          )}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="form-input" type="text" name="address" required />
          </div>
        </div>

        <div className="space-x-4 py-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-500 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Creating order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
