import "./Menu.css"

interface MenuProps {
    selectedOption : string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedArtisan: string;
}

function Menu ({ selectedOption, handleChange }: MenuProps) {
      
    return (
        <div className="options">
          <select value={selectedOption} onChange={handleChange}>
            <option value="">-- Choisir une option --</option>
            <option value="Electricien">Electricien</option>
            <option value="Plombier">Plombier</option>
            <option value="Chauffagiste">Chauffagiste</option>
          </select>
        </div>
      );
}

export default Menu;