import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Project({ id, image, name, stack, link, desc }) {
  return (
    <div className="project-view">
      <div className="card mb-5 project-view" style={{ maxWidth: 800 }}>
        <div className="g-0 d-flex flex-column flex-lg-row align-items-center ">
          <div className="">
            <img
              src={image}
              className="img-fluid rounded-start project-img"
              alt={name}
            />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p style={{ whiteSpace: 'pre-wrap' }} className="card-text">
                {desc}
              </p>
              <div className="mt-5 align-text-bottom">
                <div
                  style={{
                    backgroundColor: '#e1f5f2',
                    borderRadius: 20,
                    textAlign: 'center',
                    width: 60,
                    marginBottom: 10,
                  }}
                >
                  Stack
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: '#30695f',
                    fontWeight: 'bold',
                  }}
                  className="card-text"
                >
                  {stack}
                </p>
                <Link to={link}>
                  <p className="card-text d-flex gap-4">
                    <p className="link">
                      View Detail{' '}
                      <BiLinkExternal style={{ color: 'hsl(205, 72%, 37%)' }} />
                    </p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
