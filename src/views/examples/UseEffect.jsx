import React from 'react'
import changeTitle from '../../functions/useDocumentTitle'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = (props) => {
    changeTitle("UseEffect Example👽");

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
        </div>
    )
}

export default UseEffect
