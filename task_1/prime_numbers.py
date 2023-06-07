from pprint import pprint
import time


def prime_numbers(amount_numbers: int | str) -> list | str:
    """
    Вычисляет и выводит в виде списка указанное в параметре количество простых чисел

    :param amount_numbers: Требуемое количество простых чисел в виде числа или строки
    :return: Список простых чисел
    """
    if not amount_numbers.isdigit() or int(amount_numbers) <= 0:
        return "Вы ошиблись при вводе параметра!\n"
    if isinstance(amount_numbers, str):
        amount_numbers = int(amount_numbers)
    result = [2, ]
    number = 2
    while len(result) < amount_numbers:
        number += 1
        counter = 0
        for denominator in result:
            if number % denominator == 0:
                counter += 1
                break
        if counter == 0:
            result.append(number)
    return result


if __name__ == "__main__":
    user_number = (input("Введите необходимое количество простых чисел!\n")).strip()
    start = time.perf_counter()
    answer = prime_numbers(user_number)
    end = time.perf_counter()
    pprint(answer, compact=True)
    print(f'Вычисления заняли {end - start}')
