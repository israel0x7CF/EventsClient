const CreateOrganizer = () => {
  return (
    <div>
      <Form>
        <Form.Item
          name="Name"
          label="username"
          rules={[
            {
              required: true,
              message: "Your Name Is Required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Your Name Is Required",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
