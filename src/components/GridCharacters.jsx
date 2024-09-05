export const GridCharacters = () => {
    return (
        <>
            <div className="d-flex flex-row rows-cols-6">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id}>
                            <h3 className="text-center">{char.name}</h3>
                            <img style={{ width: '12rem' }} src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="image" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
