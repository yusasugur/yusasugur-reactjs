import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateProduct from '../Components/CreateProduct';

test('Checks product name input', () => {
    render(
        <BrowserRouter>
            <CreateProduct />
        </BrowserRouter>
    );
    const linkElement = screen.getByPlaceholderText(/Product Name/i);
    expect(linkElement).toBeInTheDocument();
});

test('Checks product name input', () => {
    render(
        <BrowserRouter>
            <CreateProduct />
        </BrowserRouter>
    );
    const linkElement = screen.getByPlaceholderText(/Description/i);
    expect(linkElement).toBeInTheDocument();
});
