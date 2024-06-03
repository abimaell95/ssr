export async function getServerSideProps(context) {
    const { id } = context.params;
    return {
        props: { id },
    };
}

export default function Page({ id }) {
    return <h1>Dynamic Page with ID: {id}</h1>;
}