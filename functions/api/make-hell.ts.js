export async function onRequestGet({ params }) {
    const info = JSON.stringify({horse: 'neigh'});
    return new Response(info, null, 2);
}
