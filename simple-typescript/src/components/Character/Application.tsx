import React, { useEffect, useState } from "react";
import { CharacterType, fetchCharacter } from "./characters";
import { Loading } from "./Loading";
import { CharacterInformation } from "./CharacterInformation";

function Application() {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, 1000);
  }, []);
  return (
    <div>
      {loading && <Loading />}
      <main>{character && <CharacterInformation character={character} />}</main>
    </div>
  );
}

export default Application;
