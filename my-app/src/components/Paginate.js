import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'




function Paginate({pages , page ,keyword='' , isAdmin=false}) {
//    const x =0
//     const to = {
//         pathname: `/`,
//         search: `?keyword=${keyword}&page=${x + 1}`,
//       };
//     //   const to = `/?keyword=${keyword}&page=${x + 1}`
    
//       const to1 = {
//         pathname: "/admin",
//         search:`?keyword=${keyword}&page=${x + 1}`,
//       }

    if(keyword){
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    } 
    console.log('KEYWORD:' , keyword)
    return (pages > 1 && (
    <Pagination>
        {/* { [ ...Array(pages).keys()].map((x) => (
            
                <LinkContainer
                 key={x + 1}
                //  to={`/?keyword=${keyword}&page=${x + 1}`}
                to={ !isAdmin ? 
                    to : to1
                     }
                 >
                
                <Pagination.Item active={x + 1 === page}>
                    {x + 1}
                </Pagination.Item>
                </LinkContainer>

        )
        ) } */}
         {[...Array(pages).keys()].map((x) => {
          const to = {
            pathname: "/shop",
            search: `?keyword=${keyword}&page=${x + 1}`,
          };

          const toAdmin = {
            pathname: "/admin/productlist",
            search: `/?keyword=${keyword}&page=${x + 1}`,
          };

          return (
            <LinkContainer key={x + 1} to={!isAdmin ? to : toAdmin}>
            {/* <LinkContainer key={x + 1} to={to }> */}
              <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          );
        })}
    </Pagination>
  )

    
  )
}

export default Paginate