import styles from './column-table.module.scss';

function Size({ rows, setRows, columns, setColumns }) {
  return (
    <section className={styles.size}>
      <label htmlFor="rows">Rows</label>
      <input
        type="range"
        name="rows"
        id="rows"
        min="2"
        max="9"
        value={rows}
        onChange={(e) => setRows(+e.target.value)}
      />

      <label htmlFor="columns">Columns</label>
      <input
        type="range"
        name="columns"
        id="columns"
        min="2"
        max="9"
        value={columns}
        onChange={(e) => setColumns(+e.target.value)}
      />
    </section>
  );
}

export default Size;
