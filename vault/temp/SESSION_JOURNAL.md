## 2026-07-15 23:26:15.813Z load
- url: http://192.168.11.132:3000/

## 2026-07-15 23:26:16.231Z navigate
- url: http://192.168.11.132:3000/
- via: replaceState

## 2026-07-15 23:26:26.689Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Começar"}

## 2026-07-15 23:26:26.692Z navigate
- url: http://192.168.11.132:3000/#comecar
- via: popstate

## 2026-07-15 23:26:29.623Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conteúdos Gratuitos"}

## 2026-07-15 23:26:40.622Z click
- element: {"tag":"button","role":null,"ariaLabel":"Fechar","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-15 23:26:42.190Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Trilhas"}

## 2026-07-15 23:26:42.191Z navigate
- url: http://192.168.11.132:3000/#trilhas
- via: popstate

## 2026-07-15 23:26:45.534Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Histórias"}

## 2026-07-15 23:26:45.535Z navigate
- url: http://192.168.11.132:3000/#historias
- via: popstate

## 2026-07-15 23:26:52.887Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Camila SouzaFront-end Developer+186% de rendaSaí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir.Lucas FerreiraBack-end DeveloperPrimeira vaga em 7 mesesNunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender.Beatriz LimaData & IAContrato internacionalMigrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar."}

## 2026-07-15 23:26:53.119Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender."}

## 2026-07-15 23:26:54.842Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tDevClub — Onde quem constrói o futuro começa a comandar\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n..."}

## 2026-07-15 23:26:56.127Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Camila SouzaFront-end Developer+186% de rendaSaí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir.Lucas FerreiraBack-end DeveloperPrimeira vaga em 7 mesesNunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender.Beatriz LimaData & IAContrato internacionalMigrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar."}

## 2026-07-15 23:26:57.529Z click
- element: {"tag":"button","role":null,"ariaLabel":"Abrir suporte com IA","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Suporte com IA"}

## 2026-07-15 23:26:58.535Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Escreva sua mensagem...","label":"Escreva sua mensagem...","value":"","valueLength":0,"text":""}

## 2026-07-15 23:26:58.666Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Escreva sua mensagem...","label":"Escreva sua mensagem...","value":"","valueLength":0,"text":""}

## 2026-07-15 23:27:10.645Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Escreva sua mensagem...","label":"Escreva sua mensagem...","value":"Como faço para me matricular?","valueLength":29,"text":""}

## 2026-07-15 23:27:10.645Z click
- element: {"tag":"button","role":null,"ariaLabel":"Enviar","name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-15 23:27:10.646Z submit
- action: http://192.168.11.132:3000/#historias
- fields: [{"label":"Escreva sua mensagem...","type":"text","value":"Como faço para me matricular?","length":29,"redacted":false},{"label":"Enviar","type":"submit","value":"","length":0,"redacted":false}]

## 2026-07-15 23:27:43.110Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Escreva sua mensagem...","label":"Escreva sua mensagem...","value":"qual formação é  mais procurado","valueLength":31,"text":""}

## 2026-07-15 23:27:47.796Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Escreva sua mensagem...","label":"Escreva sua mensagem...","value":"qual formação é  mais procurada pelos alunos?","valueLength":45,"text":""}

## 2026-07-15 23:27:47.797Z click
- element: {"tag":"button","role":null,"ariaLabel":"Enviar","name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-15 23:27:47.797Z submit
- action: http://192.168.11.132:3000/#historias
- fields: [{"label":"Escreva sua mensagem...","type":"text","value":"qual formação é  mais procurada pelos alunos?","length":45,"redacted":false},{"label":"Enviar","type":"submit","value":"","length":0,"redacted":false}]

## 2026-07-15 23:27:56.022Z click
- element: {"tag":"button","role":null,"ariaLabel":"Abrir suporte com IA","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Suporte com IA"}

## 2026-07-15 23:33:34.348Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"passe o cursor"}

## 2026-07-15 23:33:34.795Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"passe o cursor"}

## 2026-07-15 23:33:38.206Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tDevClub — Onde quem constrói o futuro começa a comandar\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n..."}

## 2026-07-15 23:33:39.260Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tecnologiamudavidas.Massóparaquemdecideconstruir.O DevClub é para quem cansou de assistir a vida acontecer na tela dos outros. Aqui você sai da inércia, aprende construindo de verdade e entra em uma comunidade que acelera resultados — não com promessas, mas com método, prática e gente ao seu lado.mapa de evoluçãopasse o cursor"}

## 2026-07-15 23:33:53.844Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"6 mesesIntermediário"}

## 2026-07-15 23:34:13.516Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"até aqui para"}

## 2026-07-15 23:34:15.187Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ficar no mesmo lugar."}

## 2026-07-15 23:41:24.729Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Você não veio"}

## 2026-07-16 23:35:40.876Z load
- url: http://192.168.11.132:3000/

## 2026-07-16 23:35:41.446Z navigate
- url: http://192.168.11.132:3000/
- via: replaceState

## 2026-07-16 23:36:09.482Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Saí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir."}

## 2026-07-16 23:36:10.679Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender."}

## 2026-07-16 23:36:11.478Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Migrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar."}

## 2026-07-16 23:36:12.311Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Camila SouzaFront-end Developer+186% de rendaSaí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir.Lucas FerreiraBack-end DeveloperPrimeira vaga em 7 mesesNunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender.Beatriz LimaData & IAContrato internacionalMigrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar."}

## 2026-07-16 23:36:15.551Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Lucas FerreiraBack-end DeveloperPrimeira vaga em 7 mesesNunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender."}

## 2026-07-16 23:51:06.045Z click
- element: {"tag":"h1","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Você não veioaté aqui paraficar no mesmo lugar."}

## 2026-07-17 00:00:58.593Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conteúdos Gratuitos"}

## 2026-07-17 00:01:04.499Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"3h 42minJavaScriptAprenda JavaScript do zero — o guia completo para iniciantes"}

## 2026-07-17 00:01:15.200Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"54minCarreiraComo conseguir sua primeira vaga como programador"}

## 2026-07-17 00:02:47.107Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conteúdos GratuitosCanal DevClub"}

## 2026-07-17 00:10:56.441Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"3h 42minJavaScriptAprenda JavaScript do zero — o guia completo para iniciantes"}

## 2026-07-17 00:19:14.125Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inscrever-se "}

## 2026-07-17 00:23:11.027Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"1h 49minJavaScriptLIVE #01 Como sair do ZERO e chegar nos 10mil de salário como Programador"}

## 2026-07-17 00:30:41.880Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"54minCarreiraJuliana Nunes | Dicas de uma Especialista de RH para sua Carreira| DevClub Podcast 03"}

## 2026-07-17 00:33:20.414Z click
- element: {"tag":"button","role":null,"ariaLabel":"Fechar","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-17 00:33:30.918Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Oportunidades"}

## 2026-07-17 00:33:30.919Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-17 00:34:15.214Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"em breveAutomação4 mesesIniciantePythonAPIsNo-codeIntegraçõesprogresso da turma55%"}

## 2026-07-17 00:35:42.206Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Trilhas"}

## 2026-07-17 00:35:42.207Z navigate
- url: http://192.168.11.132:3000/#trilhas
- via: popstate

## 2026-07-17 00:40:49.876Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conteúdos Gratuitos"}

## 2026-07-17 00:40:57.515Z click
- element: {"tag":"button","role":null,"ariaLabel":"Fechar","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-17 00:44:46.467Z load
- url: http://192.168.11.132:3000/#trilhas
- title: Site DevClub

## 2026-07-17 00:44:46.679Z load
- url: http://192.168.11.132:3000/#trilhas
- title: Site DevClub

## 2026-07-17 00:44:56.358Z load
- url: http://192.168.11.132:3000/#trilhas

## 2026-07-17 00:45:01.051Z load
- url: http://192.168.11.132:3000/#trilhas

## 2026-07-17 00:45:11.380Z load
- url: http://192.168.11.132:3000/#trilhas

## 2026-07-17 00:45:11.546Z navigate
- url: http://192.168.11.132:3000/#trilhas
- via: replaceState

## 2026-07-17 00:45:14.351Z load
- url: http://192.168.11.132:3000/#trilhas

## 2026-07-17 00:48:53.689Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"</>DevClub"}

## 2026-07-17 00:48:53.690Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-17 00:49:00.122Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver histórias reais"}

## 2026-07-17 00:49:00.122Z navigate
- url: http://192.168.11.132:3000/#historias
- via: popstate

## 2026-07-17 00:49:10.336Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-17 00:53:45.565Z load
- url: http://192.168.11.132:3000/#historias

## 2026-07-17 00:53:45.699Z navigate
- url: http://192.168.11.132:3000/#historias
- via: replaceState

## 2026-07-17 00:56:19.866Z load
- url: http://192.168.11.132:3000/#historias

## 2026-07-17 01:00:24.084Z load
- url: http://192.168.11.132:3000/#historias

## 2026-07-17 01:13:16.320Z load
- url: http://192.168.11.132:3000/#historias

## 2026-07-17 01:13:37.094Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver histórias reais"}

## 2026-07-17 01:13:37.095Z navigate
- url: http://192.168.11.132:3000/#historias
- via: popstate

## 2026-07-17 01:15:18.325Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"</>DevClub"}

## 2026-07-17 01:15:18.325Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-17 01:15:24.445Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"</>DevClub"}

## 2026-07-17 01:15:24.445Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-17 01:21:44.314Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"role para iniciar sua evolução"}

## 2026-07-17 01:21:44.315Z navigate
- url: http://192.168.11.132:3000/#prova
- via: popstate

## 2026-07-17 01:28:14.497Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"role para iniciar sua evolução"}

## 2026-07-17 01:28:14.498Z navigate
- url: http://192.168.11.132:3000/#prova
- via: popstate

## 2026-07-17 01:28:18.617Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver histórias reais"}

## 2026-07-17 01:28:18.617Z navigate
- url: http://192.168.11.132:3000/#historias
- via: popstate

## 2026-07-17 01:28:45.687Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tutores"}

## 2026-07-17 01:28:45.688Z navigate
- url: http://192.168.11.132:3000/#tutores
- via: popstate

## 2026-07-17 01:28:51.415Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"01Marina CostaFull Stack & Carreira"}

## 2026-07-17 01:29:20.734Z click
- element: {"tag":"button","role":null,"ariaLabel":"Abrir suporte com IA","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Suporte com IA"}

## 2026-07-17 01:29:26.318Z click
- element: {"tag":"button","role":null,"ariaLabel":"Fechar chat","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-18 22:54:22.456Z load
- url: http://192.168.11.132:3000/

## 2026-07-18 22:54:22.875Z navigate
- url: http://192.168.11.132:3000/
- via: replaceState

## 2026-07-18 22:54:42.129Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conhecer o ecossistema"}

## 2026-07-18 22:54:42.131Z navigate
- url: http://192.168.11.132:3000/#ecossistema
- via: popstate

## 2026-07-18 22:55:14.742Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Começar minha evolução"}

## 2026-07-18 22:55:14.742Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-18 22:58:23.850Z load
- url: http://192.168.11.132:3000/#top

## 2026-07-18 22:58:24.067Z navigate
- url: http://192.168.11.132:3000/#top
- via: replaceState

## 2026-07-18 23:02:38.838Z load
- url: http://192.168.11.132:3000/#top

## 2026-07-18 23:02:39.191Z navigate
- url: http://192.168.11.132:3000/#top
- via: replaceState

## 2026-07-18 23:04:31.017Z load
- url: http://192.168.11.132:3000/#top

## 2026-07-18 23:20:49.108Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conteúdos Gratuitos"}

## 2026-07-18 23:20:59.595Z click
- element: {"tag":"button","role":null,"ariaLabel":"Fechar","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-18 23:21:00.943Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Conteúdos Gratuitos"}

## 2026-07-18 23:21:02.907Z click
- element: {"tag":"button","role":null,"ariaLabel":"Fechar","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-18 23:21:04.643Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Trilhas"}

## 2026-07-18 23:21:04.643Z navigate
- url: http://192.168.11.132:3000/#trilhas
- via: popstate

## 2026-07-18 23:21:14.435Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ecossistema"}

## 2026-07-18 23:21:14.435Z navigate
- url: http://192.168.11.132:3000/#ecossistema
- via: popstate

## 2026-07-18 23:22:17.459Z click
- element: {"tag":"a","role":null,"ariaLabel":"Falar no WhatsApp","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"WhatsApp"}

## 2026-07-18 23:39:08.581Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:39:08.909Z navigate
- url: http://192.168.11.132:3000/#ecossistema
- via: replaceState

## 2026-07-18 23:42:36.749Z console.error
- text: [vite] Failed to reload /src/components/devclub/Nav.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-18 23:42:44.468Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-18 23:42:57.619Z click
- element: {"tag":"vite-error-overlay","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-18 23:42:59.332Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:43:08.025Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:43:59.108Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:47:27.179Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:49:24.717Z console.error
- text: [vite] Failed to reload /src/components/devclub/Nav.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-18 23:49:33.542Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-18 23:50:07.593Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-18 23:53:07.483Z console.error
- text: [vite] Failed to reload /src/App.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-18 23:54:53.780Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:55:16.587Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:55:50.770Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:55:54.573Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:56:28.685Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:56:32.934Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:56:59.484Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:57:03.186Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:57:16.824Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:57:21.874Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:57:23.078Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-18 23:57:58.727Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:10:01.010Z console.error
- text: [vite] Failed to reload /src/components/devclub/Nav.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:10:29.062Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:10:48.767Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:11:07.509Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:11:24.613Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:11:37.370Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:12:00.900Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:12:14.895Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:13:02.369Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:13:52.007Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:13:53.813Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:14:10.677Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:14:38.181Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:14:45.503Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:14:54.935Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-07-19 00:16:54.223Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:16:55.148Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:16:56.225Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:17:25.283Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:18:12.465Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:18:38.373Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:18:52.363Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:20:04.988Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:20:10.952Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:23:44.474Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:30:42.650Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:44:01.566Z load
- url: http://192.168.11.132:3000/#ecossistema

## 2026-07-19 00:44:08.186Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"DevClub"}

## 2026-07-19 00:44:08.187Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-19 00:44:42.070Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Começar"}

## 2026-07-19 00:44:42.071Z navigate
- url: http://192.168.11.132:3000/#comecar
- via: popstate

## 2026-07-19 00:44:44.894Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Começar minha evolução"}

## 2026-07-19 00:44:44.895Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-19 00:54:07.798Z load
- url: http://192.168.11.132:3000/#top

## 2026-07-19 00:54:08.168Z navigate
- url: http://192.168.11.132:3000/#top
- via: replaceState

## 2026-07-19 15:37:43.592Z load
- url: http://192.168.11.132:3000/

## 2026-07-19 15:37:44.158Z navigate
- url: http://192.168.11.132:3000/
- via: replaceState

## 2026-07-19 15:38:17.602Z click
- element: {"tag":"svg","role":"img","ariaLabel":"Rota de evolução do primeiro código à nova carreira","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-19 15:38:19.488Z click
- element: {"tag":"svg","role":"img","ariaLabel":"Rota de evolução do primeiro código à nova carreira","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-19 15:38:21.025Z click
- element: {"tag":"svg","role":"img","ariaLabel":"Rota de evolução do primeiro código à nova carreira","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-19 15:38:21.888Z click
- element: {"tag":"svg","role":"img","ariaLabel":"Rota de evolução do primeiro código à nova carreira","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-19 15:39:36.753Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Camila SouzaFront-end Developer+186% de rendaSaí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir.Lucas FerreiraBack-end DeveloperPrimeira vaga em 7 mesesNunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender.Beatriz LimaData & IAContrato internacionalMigrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar."}

## 2026-07-19 15:39:42.788Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beatriz Lima"}

## 2026-07-19 15:39:46.794Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tDevClub — Onde quem constrói o futuro começa a comandar\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n..."}

## 2026-07-19 15:39:48.504Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Camila SouzaFront-end Developer+186% de rendaSaí do atendimento para o time de produto de uma fintech. A comunidade me segurou nos dias que quis desistir.Lucas FerreiraBack-end DeveloperPrimeira vaga em 7 mesesNunca tinha escrito uma linha de código. O método por projetos mudou completamente a minha forma de aprender.Beatriz LimaData & IAContrato internacionalMigrei de área aos 34. Hoje trabalho remoto para uma empresa de fora e ganho em dólar."}

## 2026-07-19 15:39:50.683Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tDevClub — Onde quem constrói o futuro começa a comandar\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n..."}

## 2026-07-19 15:39:53.977Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tDevClub — Onde quem constrói o futuro começa a comandar\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n..."}

## 2026-07-19 15:39:55.553Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tDevClub — Onde quem constrói o futuro começa a comandar\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n..."}

## 2026-07-19 15:40:33.751Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"02Diego MartinsArquitetura & Back-end"}

## 2026-07-19 15:40:46.239Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"</>DevClub"}

## 2026-07-19 15:40:46.240Z navigate
- url: http://192.168.11.132:3000/#top
- via: popstate

## 2026-07-20 20:14:05.826Z load
- url: http://192.168.11.132:3001/

## 2026-07-20 20:14:07.174Z navigate
- url: http://192.168.11.132:3001/
- via: replaceState

## 2026-07-20 20:14:19.583Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"O próximo projetopode mudar tudo.Começar minha evoluçãoVocê não precisa saber tudo para começar. Precisa começar para descobrir até onde consegue chegar."}

## 2026-07-20 23:46:29.945Z load
- url: http://192.168.11.132:3001/

## 2026-07-20 23:46:50.715Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver histórias reais"}

## 2026-07-20 23:46:50.716Z navigate
- url: http://192.168.11.132:3001/#historias
- via: popstate

## 2026-07-20 23:46:53.648Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ecossistema"}

## 2026-07-20 23:46:53.649Z navigate
- url: http://192.168.11.132:3001/#ecossistema
- via: popstate

## 2026-07-20 23:47:02.432Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Formações06 trilhas ativas"}

## 2026-07-20 23:47:03.668Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Mentoriasao vivo toda semana"}

## 2026-07-20 23:47:05.680Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Formações06 trilhas ativas"}

## 2026-07-20 23:47:16.944Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Front-end90%Back-end72%Deploy & DevOps58%"}

## 2026-07-20 23:47:17.752Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Front-end90%Back-end72%Deploy & DevOps58%"}

## 2026-07-20 23:47:19.904Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Mentoriasao vivo toda semana"}

## 2026-07-20 23:47:28.984Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Comunidade35k membros online"}

## 2026-07-20 23:47:35.448Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Projetos reaisbuild in public"}

## 2026-07-20 23:47:44.936Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"EcossistemaTrilhasHistóriasTutoresConteúdos GratuitosComeçar"}

## 2026-07-20 23:47:45.432Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ecossistema"}

## 2026-07-20 23:47:45.432Z navigate
- url: http://192.168.11.132:3001/#ecossistema
- via: popstate

## 2026-07-21 00:44:18.755Z load
- url: http://192.168.11.132:3000/
- title: DevClub | Aprenda programação na prática

## 2026-07-21 00:44:19.485Z navigate
- url: http://192.168.11.132:3000/
- via: replaceState

## 2026-07-21 00:44:41.581Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-21 00:44:42.036Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-21 00:44:46.543Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-07-21 00:44:51.187Z load
- url: http://192.168.11.132:3000/
- title: DevClub | Aprenda programação na prática

## 2026-07-21 00:51:00.306Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"sistema de evolução profissionalAprenda tecnologia construindo projetos reais, dentro de uma comunidade que transforma esforço em oportunidade. Do primeiro código à primeira grande conquista.Conhecer o ecossistemaVer histórias reais"}

