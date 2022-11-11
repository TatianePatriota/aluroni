import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";

export default function Ordenador() {
  return (
    <button className={styles.ordenador}>
      <span>Ordenadar Por:</span>
      <div className={styles.ordenador__options}>
        {opcoes.map(opcao =>(
          <div className={styles.ordenador_opition} key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}