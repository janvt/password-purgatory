export const onRequestGet: PagesFunction = async () => {
    const info = JSON.stringify({horse: 'neigh'});
    return new Response(info, {
        headers: { "Content-Type": "application/json"},
    });
}
