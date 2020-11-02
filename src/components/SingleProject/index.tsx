import React from 'react'

function SingleProject() {
  return (
    <div className="project__container">
      <div className="project__info__container">
        <h3 className="project__info__title">project title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          eos consectetur veritatis et asperiores culpa distinctio? Dolorum,
          culpa natus doloribus debitis exercitationem eos nisi doloremque
          facilis alias quasi sint sunt libero sapiente provident unde id facere
          vitae eveniet, optio excepturi. Ducimus ullam dolore temporibus ipsum
          officiis porro commodi quia.
        </p>
        <div className="project__btn__container">
          <button className="project__btn__live">see live</button>
          <button className="project__btn__scode">source code</button>
        </div>
      </div>
      <div className="project__img__container">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="project-demo-img"
          className="project__img__item"
        />
      </div>
    </div>
  )
}

export default SingleProject
