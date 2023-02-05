import tw from 'twin.macro';
import styled from 'styled-components';



export const FormContainer = styled.div`
 ${tw`items-center p-8 mt-8 ml-96 mb-8 max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 `}`;

export const LabelContainer = styled.div`
 ${tw` flex flex-col space-y-4 w-80 p-8  `}`;

export const Button = styled.div`
 ${tw`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center`}`;

export const Error = styled.div`
 ${tw`bg-red-50`}`;




