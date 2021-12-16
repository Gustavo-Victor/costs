function ProjectForm(){
    return (
        <form>
            <div>
                <input name='project_name' type='text' placeholder="Insira o nome do projeto..." />
            </div>
            <div>
                <input name="project_budget" type='number' placeholder="Insira o orçamento total..." />
            </div>
            <div>
                <select name='category_id' placeholder="">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <button name="submit" id='submit' type="submit">Criar projeto</button>
            </div>
        </form>

    )
}

export default ProjectForm;