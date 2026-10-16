
from datetime import timedelta

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    decode_access_token,
)


def test_hash_password():
    password = "ClaveSegura123"
    hashed = hash_password(password)

    assert hashed != password
    assert verify_password(password, hashed)


def test_password_incorrecta():
    hashed = hash_password("ClaveSegura123")

    assert not verify_password("OtraClave123", hashed)


def test_crear_token():
    token = create_access_token(subject="1")

    payload = decode_access_token(token)

    assert payload is not None
    assert payload["sub"] == "1"


def test_token_invalido():
    payload = decode_access_token("token_invalido")

    assert payload is None


def test_token_con_expiracion():
    token = create_access_token(
        subject="1",
        expires_delta=timedelta(seconds=-1),
    )

    payload = decode_access_token(token)

    assert payload is None
