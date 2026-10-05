# Site pessoal de Awdren Fontão

Código completo da versão com identidade visual vermelha, preta e branca, páginas em português e inglês e players de vídeo carregados desde a abertura. Preparado para **https://awdren.github.io/**.

O site usa HTML, CSS e JavaScript puros. **Não há build, npm, servidor de aplicação, banco de dados, chave de API ou dependência do ChatGPT para executá-lo.**

## Publicar no GitHub Pages

1. Descompacte o ZIP.
2. Abra seu repositório **awdren/awdren.github.io** no GitHub.
3. Copie **o conteúdo da pasta `awdren.github.io`** para a raiz da branch que será publicada, normalmente `main`. O `index.html` deve estar diretamente na raiz, ao lado de `style.css`, `navigation.js`, `assets/` e `en/`. Não envie o ZIP nem crie uma pasta `dist` ou outra pasta intermediária.
4. Inclua também o arquivo vazio **`.nojekyll`**, que desativa o processamento Jekyll. No Finder do macOS, `Command + Shift + .` mostra arquivos ocultos. Se usar o upload pelo navegador e ele não aparecer, crie-o no GitHub por **Add file → Create new file**, com o nome `.nojekyll`.
5. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**.
6. Em **Branch**, escolha a branch que recebeu os arquivos (`main`, ou a branch usada no seu repositório) e a pasta **/(root)**. Clique em **Save**.
7. Aguarde a publicação terminar. Acompanhe em **Actions** e confira o endereço indicado em **Settings → Pages**.

A página principal ficará em `https://awdren.github.io/` e a versão em inglês em `https://awdren.github.io/en/`.

### Ao substituir o site atual

Faça o commit dos novos arquivos no repositório existente, mantendo o histórico Git. O novo `index.html` e seus arquivos devem substituir os equivalentes antigos. Não apague a pasta `.git` do seu clone.

Este pacote usa publicação direta da branch. Se o repositório já tiver um workflow personalizado que gera e publica outro site, desative esse workflow antigo para ele não substituir esta versão; mantenha **Deploy from a branch** como fonte do Pages. Se houver um `CNAME` antigo, confira se você ainda quer usar o domínio indicado nele.

Não é necessário configurar GitHub Actions manualmente, cadastrar secrets ou subir arquivos da plataforma anterior.

## Conferir no computador antes de publicar

Com Python 3 instalado, abra um terminal dentro da pasta que contém `index.html` e execute:

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000/` e `http://localhost:8000/en/`. Encerre com `Ctrl+C`.

Use esse servidor local em vez de abrir o HTML com duplo clique: os endereços que começam com `/` apontam para a raiz do site. O Python é apenas uma opção de pré-visualização; não é necessário no GitHub Pages.

## Arquivos

| Arquivo ou pasta | Finalidade |
| --- | --- |
| `index.html` | Página em português, conteúdo e metadados |
| `en/index.html` | Página em inglês, conteúdo e metadados |
| `style.css` | Estilos, cores, tipografia e layouts responsivos |
| `navigation.js` | Menu móvel, navegação por seções e foco por teclado |
| `assets/` | Fotografias, arte original do Instagram e favicon |
| `404.html` | Página para endereços inexistentes |
| `.nojekyll` | Publicação estática sem processamento Jekyll |
| `robots.txt` | Endereço do sitemap para mecanismos de busca |
| `sitemap.xml` | URLs das versões em português e inglês |

## Atualizar o conteúdo

- **Textos, projetos e publicações:** edite `index.html` e `en/index.html`. As traduções são independentes; atualize as duas quando necessário.
- **Prêmios de orientandos:** procure `premios-orientandos`.
- **Serviço à comunidade:** procure `id="comunidade"`.
- **Foto:** a abertura usa `portrait-360.webp`, `portrait-640.webp` e `portrait-960.webp` em `assets/`, com `srcset` para tamanhos de tela diferentes. Atualize também o texto alternativo se trocar a foto.
- **Arte do Instagram:** `assets/instagram-identidade.png`.
- **Vídeos:** edite os atributos `src` e `title` dos `iframe` e os respectivos links externos nas duas páginas. Os players iniciam o carregamento junto da página; a reprodução não é automática.
- **Cores:** o bloco final de identidade no `style.css` usa `--accent` e `--accent-deep`. Preserve o contraste do texto.
- **Estilos e scripts:** os links incluem `?v=...` para evitar cache antigo. Depois de alterar `style.css` ou `navigation.js`, troque o valor de `v` nas duas páginas, por exemplo para `v=20261006`.

Os vídeos dependem da disponibilidade e das permissões de incorporação do YouTube e do Instagram. Os links para assistir diretamente nas plataformas foram preservados. O contato usa `mailto:` e abre o aplicativo de e-mail da pessoa.

## Domínio e caminhos

Os links canônicos, versões de idioma, dados estruturados, `robots.txt` e sitemap já apontam para `https://awdren.github.io/`.

Este pacote foi preparado para o site de usuário na **raiz desse domínio**. Para publicar em um repositório de projeto (`usuario.github.io/outro-repositorio/`) ou mudar de domínio, revise os caminhos iniciados por `/` e os metadados antes da publicação.

## Verificação realizada

Foram conferidos: arquivos e links internos, existência das imagens, as duas rotas de idioma, metadados do domínio, oito players em cada versão, sintaxe do JavaScript e ausência de arquivos de configuração ou credenciais da plataforma anterior. A configuração final do Pages deve ser feita no seu repositório, conforme o passo a passo acima.

## Documentação oficial

- [Configurar a origem de publicação do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Criar um site do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site)
