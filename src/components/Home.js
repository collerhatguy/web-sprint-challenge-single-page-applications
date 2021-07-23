import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <header>
                <nav>
                    <Link id="order-pizza"  
                    to="/pizza">Order Pizza</Link>
                </nav>
            </header>
        </div>
    )
}
