import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

//You can tell TypeScript that you're defining global.fetch as a Jest mock.

window.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200, //http all ok
    json: () => Promise.resolve({}),
  })
);

describe('communicateWithOpenAI', () => {
  const plant = "Begonia";
  const message = "Hi";

  it("The request is well send", async () => {
    const response = await communicateWithOpenAI(plant, message);
    expect(response).toEqual({
      status: 200,
      json: expect.any(Function)
    });
  });

  it("the API response correctly", async () => {
    const response = {
      choices: [
        {
          message: {
            role: "system",
            content: "Hola, como estas?",
          },
        },
      ],
    };

    window.fetch.mockResolvedValue({
      json: () => Promise.resolve(response),
    });
    communicateWithOpenAI(plant, message)
      .then((res) => res.json())
      .then((data) => {
        expect(data).toEqual(response);
      });
  });



  

// test('randocall calls its callback with a class instance', () => {
//   const mock = jest.fn();
//   getMessage(mock);
//   expect(mock).toHaveBeenCalledWith(expect.any(Message));
});