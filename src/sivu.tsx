export const Sivu = (props: unknown) => {
  return (
    <>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </>
  );
};
