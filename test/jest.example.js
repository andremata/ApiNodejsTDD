test('Devo conhecer as assertivas do jest', () => {
    let number = null;

    //verifica nulo
    expect(number).toBeNull();

    number = 10;

    //verifica negativa
    expect(number).not.toBeNull();

    //verifica igualdade
    expect(number).toBe(10);
    expect(number).toEqual(10);

    //verifica igualdade quando não tem um valor exato
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'Fulano', email: 'fulano@email.com' };

    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Fulano');
    expect(obj.name).toBe('Fulano');

    const obj2 = { name: 'Fulano', email: 'fulano@email.com' };

    expect(obj).toEqual(obj2);
    expect(obj).toBe(obj);
});