import React from 'react'
import { MainFooter } from './navbarelements'
function Footer() {
    return (
        <div>
            <MainFooter>
                <div className='col'>
                    <div>
                        Call Mr.Moe
                    </div>
                    <div>
                        Call Mr.Moe
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        Glen
                    </div>
                </div>
                <div className='container' style ={{justifyContent:'flex-end'}}>
                    <div className='col' >
                        <div className='row'>
                            Glen
                        </div>
                    </div>
                </div>
            </MainFooter>

        </div>
    )
}

export default Footer
