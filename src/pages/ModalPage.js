import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button rounded onClick={handleClose} primary>
      I accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important message for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis
        cursus arcu, et faucibus augue malesuada eget. Nulla a sollicitudin
        metus. Aenean mi ipsum, malesuada ac placerat a, accumsan et elit. Nulla
        vestibulum lorem odio, a luctus neque suscipit vitae. Nunc consequat,
        lacus ornare tempor viverra, tortor tellus rhoncus nulla, sed dignissim
        felis metus in tellus. Vivamus sodales metus ut accumsan consectetur.
        Aenean sed lacus vel quam lobortis suscipit sit amet ut dolor.
        Suspendisse consectetur metus vitae enim faucibus, sit amet porttitor
        tellus accumsan. Morbi libero augue, vehicula et lectus a, vulputate
        vestibulum turpis. Nulla sed tortor leo. Curabitur euismod aliquam
        tellus, non dapibus tellus facilisis nec.
      </p>
    </div>
  );
}

export default ModalPage;
