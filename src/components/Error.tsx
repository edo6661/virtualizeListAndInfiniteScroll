const TemporaryError = ({ message }: { message?: string | Error }) => (
    <h2 >
        {message ? (typeof message === 'string' ? message : message.message) : 'Unknown error'}
    </h2>
);

export default TemporaryError