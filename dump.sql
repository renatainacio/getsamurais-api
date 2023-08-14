--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: category; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.category AS ENUM (
    'housekeeping',
    'babysitting',
    'tutoring',
    'elderly care',
    'nursing',
    'driving',
    'cooking',
    'gardening',
    'cleaning',
    'pet care',
    'handyman',
    'construction',
    'carpentry',
    'wall painting',
    'design',
    'software',
    'hardware repair',
    'handcrafting',
    'decoration',
    'event entertainment',
    'waiter',
    'photography',
    'fitness services',
    'personal styling',
    'miscellaneous'
);


--
-- Name: gender; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.gender AS ENUM (
    'male',
    'female',
    'non-binary'
);


--
-- Name: price_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.price_type AS ENUM (
    'hour',
    'm2',
    'daily',
    'page',
    'project'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: services; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services (
    id integer NOT NULL,
    "userId" integer,
    "categoryId" integer,
    photo text,
    description text,
    price integer,
    "priceUnit" public.price_type,
    status boolean
);


--
-- Name: services_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "fullName" text,
    gender public.gender,
    username text,
    email text,
    cpf text,
    phone text,
    city text,
    state text,
    password text,
    image text
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: services id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'housekeeping');
INSERT INTO public.categories VALUES (2, 'babysitting');
INSERT INTO public.categories VALUES (3, 'tutoring');
INSERT INTO public.categories VALUES (4, 'elderly care');
INSERT INTO public.categories VALUES (5, 'nursing');
INSERT INTO public.categories VALUES (6, 'driving');
INSERT INTO public.categories VALUES (7, 'cooking');
INSERT INTO public.categories VALUES (8, 'gardening');
INSERT INTO public.categories VALUES (9, 'cleaning');
INSERT INTO public.categories VALUES (10, 'pet care');
INSERT INTO public.categories VALUES (11, 'handyman');
INSERT INTO public.categories VALUES (12, 'construction');
INSERT INTO public.categories VALUES (13, 'carpentry');
INSERT INTO public.categories VALUES (14, 'wall painting');
INSERT INTO public.categories VALUES (15, 'design');
INSERT INTO public.categories VALUES (16, 'software');
INSERT INTO public.categories VALUES (17, 'hardware repair');
INSERT INTO public.categories VALUES (18, 'handcrafting');
INSERT INTO public.categories VALUES (19, 'decoration');
INSERT INTO public.categories VALUES (20, 'event entertainment');
INSERT INTO public.categories VALUES (21, 'waiter');
INSERT INTO public.categories VALUES (22, 'photography');
INSERT INTO public.categories VALUES (23, 'fitness services');
INSERT INTO public.categories VALUES (24, 'personal styling');
INSERT INTO public.categories VALUES (25, 'proofreading');
INSERT INTO public.categories VALUES (26, 'miscellaneous');


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.services VALUES (2, 5, 1, '', 'Aulas de piano', 8000, 'hour', true);
INSERT INTO public.services VALUES (4, 5, 8, 'data:image/jpeg;base64,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', 'Jardinagem', 8500, 'hour', true);
INSERT INTO public.services VALUES (5, 5, 2, 'https://www.norland.ac.uk/wp-content/uploads/2020/06/GiJ-Norland-66-H.jpg', 'Babá', 5000, 'hour', true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (5, 'renata', 'female', 're', 'revazgauska@gmail.com', '406.935.588-06', '(11)99965-1992', 'Amarante do Maranhão', 'MA', '$2b$10$96QJ701W9Q7bZlg/EBS6KumLlrkBm9leDA8d/dIopdBJPgKn8xO4S', '');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 26, true);


--
-- Name: services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.services_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: users users_cpf_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cpf_key UNIQUE (cpf);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: services services_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT "services_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: services services_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT "services_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

