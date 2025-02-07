'use client';

const Rand = (props: { session: object }) => {
  const formattedJson = JSON.stringify(props.session, undefined, 2);

  return (
    <div>
      Client Component Example <br />
      <pre style={{ whiteSpace: 'pre-wrap' }}>{formattedJson}</pre>
    </div>
  );
};

export default Rand;
