# Documento Maestro — TAMV MD‑X4 (Master Plan integrado)

Última actualización: 2025-12-31  
Autor: Equipo de Arquitectura TAMV / IA asistida (Isabella)  
Versión: 2025.12.31-INTG

Resumen ejecutivo
-----------------
TAMV (Tierra de Arte, Memoria y Verdad) es un ecosistema inmersivo, multisensorial y civilizatorio que integra identidad soberana, gobernanza, economía, modelos IA y experiencias XR/4D. Este documento maestro consolida la visión filosófica, el diseño técnico, el catálogo de módulos, los contratos, los algoritmos críticos, la seguridad, la observabilidad, CI/CD, runbooks y el Whitepaper inicial de la TAMV Blockchain MSR. Integra asimismo el concepto "TAMV knowledge — Integración total para despliegue y producción", definiendo alcance, objetivos, capas L0–L4, y checklist de producción.

Objetivo del documento
----------------------
Proveer una única fuente de verdad técnica y operativa para integrar cada sistema, programa, lógica, algoritmo, script y función de TAMV hacia producción estable, auditable y escalable. Entregar inventario operativo, rutas de integración, contratos de datos, endpoints, flujos críticos, observabilidad, CI/CD, runbooks, checklists de hardening y guías de gobernanza.

Principios rectores
-------------------
- Soberanía digital y prioridad al creador (split económico preferente 75/25).
- Ética Operativa en Tiempo de Cómputo (EOCT).
- Transparencia verificable (BookPI anchor + audit bundles).
- Antifragilidad: L0–L3 operativos y L4 meta‑gobernanza.
- Modularidad por KnowledgeCell: cada capacidad = microservicio, versionado, test y observabilidad.

Triple Federado — resumen
-------------------------
1. Federación de Gobernanza (Políticas & Legales): comité multi‑stakeholder, contratos versionados, DPA templates, registro de decisiones en ledger.
2. Federación de Datos (Soberanía & Proveniencia): datos bajo control del tenant, metadatos en ledger permissioned, lineage y políticas.
3. Federación de Servicios/Compute (Despliegue & Orquestación): clústers propiedad de tenants, control plane federado, equilibrio entre GPU farms y edge.

Alcance y objetivos (TAMV knowledge — Integración total)
--------------------------------------------------------
- Propósito: Integrar operacionalmente todos los artefactos reales del ecosistema (código, modelos, scripts, infralog, runbooks) para un despliegue en producción que sea verificable, auditable y escalable.
- Resultado: Inventario civilizatorio completo con rutas de integración, contratos de datos, endpoints, flujos críticos, seguridad, observabilidad, CI/CD, runbooks y checklists de hardening.
- Principios añadidos: EOCT aplicado por defecto, BookPI como ancla de evidencia, modelos de reparto económico y antifragilidad multi‑nivel.

Mapa de arquitectura y capas
----------------------------
Capas operativas:
- L0 — Shell mínimo: home visual‑first, onboarding básico, evidencia visible (TrustBadge).
- L1 — Servicios críticos: ID NVIDA, BookPI, pagos, notificaciones, gateway, catalog.
- L2 — XR intensivo: DreamSpaces, Live Rooms, KAOS Audio 3D, experiencias editoriales.
- L3 — Orquestación: Isabella IA (planner & safety), DM X4 event backbone, Anubis Sentinel (seguridad).
- L4 — Meta gobernanza: Trinidad federada (técnico‑documental‑ético), reforma y arbitraje.

Plano técnico (stack recomendado):
- Frontends: SSR (Next.js/Tturbo), WebXR/WebGPU viewer, Studio operativa (editor).
- Gateways/API: GraphQL + REST + gRPC; ABAC + OIDC + Passkeys.
- Microservicios: Node.js/TypeScript (NestJS/Fastify) + Python para ML/cuántica.
- Data Plane: PostgreSQL + pgvector, Redis, MinIO/S3, IPFS para artefactos anclables.
- Messaging: Kafka/NATS con pattern outbox; DLQ y idempotencia.
- Infra: Kubernetes + Istio/Cilium (mTLS), Terraform, Helm, ArgoCD (GitOps).
- Observabilidad: OpenTelemetry, Prometheus, Grafana, Loki, Tempo/Jaeger.
- Ledger: Permissioned Hyperledger Fabric o L2 permissioned con anchoring on‑chain.
- Seguridad: WAF, OPA/Gatekeeper, HSM/KMS, PQC gradual.

Catálogo maestro de sistemas, programas y funciones
--------------------------------------------------
ID | Módulo | Tipo | Capa | Función clave
---|--------|------|------|--------------
AI01 | Isabella Core | Motor IA | L3 | Orquestación de intents, EOCT, auditoría
AI02 | Korima Nexus | Memoria/explicabilidad | L3 | RAG + vector DB, Explain API
DM01 | DM X4 Bus | Backbone eventos | L3 | Eventos tipados, outbox, DLQ
ID01 | ID NVIDA | Identidad soberana | L1 | DID issuance, consent ledger, device trust
BK01 | BookPI | Evidencia | L1 | DecisionRecord + AuditBundle + anchor
SG01 | Anubis Sentinel | Seguridad/rollback | L3 | Detección, forensic playback, orchestration rollback
XR01 | DreamSpaces | XR editor/experiencias | L2 | Plantillas, timeline AV, QA auto
XR02 | KAOS Audio 3D | Audio espacial | L2 | Motor 3D/4D, presets emocionales
EC01 | Economía | Monetización | L1 | Split 75/25, TAMV Credits, subastas
GW01 | Gateway | API ingress | L1 | Auth, ABAC, rate limits, observabilidad
NO01 | Notifications | SSE/WebSocket | L1 | Streams de usuario y operador
CT01 | Catalog | Dominio | L1 | CRUD productos/media
TR01 | Trueque | Dominio | L1 | Ofertas, match, escrow, disputa
MB01 | Memberships | Dominio | L1 | Tiers, entitlements, estado

Endpoints, contratos y esquemas de datos (blueprint)
---------------------------------------------------
Gateway (v1) — endpoints esenciales:
- POST /v1/auth/session — Crear sesión (passkeys/OIDC); respuesta con tokens y device_trust.
- GET /v1/catalog/products — Listar productos; POST /v1/catalog/product — Crear producto.
- POST /v1/trueque/offers — Proponer oferta.
- POST /v1/trueque/offers/{id}/match — Realizar match.
- POST /v1/disputes — Abrir disputa.
- POST /v1/bookpi/publish — Publicar AuditBundle; GET /v1/bookpi/{id} — Resumen DecisionRecord.
- GET /v1/stream — SSE usuario; GET /v1/ws — WS operadores.

Identity:
- POST /onboard — Emitir DID y consent hash.
- POST /webauthn/register, POST /webauthn/verify.
- OIDC endpoints: /.well-known/openid-configuration, /token, /userinfo.

Isabella:
- POST /isabella/intent — Planificación + EOCT.
- POST /isabella/audit — Registrar ModelAudit.

DM X4:
- POST /dmx4/publish — Emitir evento tipado.
- GET /dmx4/dlq — Estado DLQ.

DAO/Gobernanza (v1 opcional):
- POST /dao/proposals, POST /dao/vote, POST /dao/simulate.

Contratos y esquemas (Zod / JSON Schema — resumen):
- User: { id, handle, locale, roles[], attributes[], risk_score, device_trust, created_at }
- Membership: { id, user_id, tier, entitlements[], status, started_at, expires_at }
- Product: { id, owner_id, title, description, category, media[], tags[], condition, state }
- TruequeOffer: { id, proposer_id, product_ids[], requested_items[], terms, status, risk_score }
- Dispute: { id, related_offer_id, opened_by, reason_code, evidence[], status, resolution? }
- EventEnvelope: { id, topic, occurred_at, correlation_id?, actor_id?, payload, signature? }
- AuditBundle: { decisionRecord, logs[], hashes[], signature, legal_meta }
- DecisionRecord: { decisionId, actorId, action, resource, timestamp, eoctScore, reasons[] }

KnowledgeCell — patrón y metadatos
---------------------------------
Cada KnowledgeCell (microservicio) debe exponer:
- Metadata: id, type, description, version, dependencies[], inputFormat, outputFormat, iaSpecializationPrompt, apiEndpoint, microserviceUrl, testCases[], visualizationSample, author, created, updated.
- Endpoints mínimos: GET /metadata, POST /run, POST /specialize, GET /health, GET /metrics, GET /visualization/:id.
- Versionado semántico independiente, CI+tests, observabilidad y registro de hashes en BookPI al publicar release.

Algoritmos, lógicas y flujos críticos
------------------------------------
EOCT — Ética Operativa en Tiempo de Cómputo:
- Entrada: intent, contexto (identidad, device_trust, risk_score), recurso.
- Proceso: aplicar criterios (beneficencia, no maleficencia, justicia, explicabilidad).
- Salida: eoctScore ∈ [0,1], DecisionRecord y acciones (permitir/bloquear/escalar).
- Reglas: operaciones sensibles necesitan dual‑control/human‑in‑the‑loop si eoctScore < umbral.

ABAC en gateway:
- Contexto = subject + action + resource + environment (jurisdicción, time window).
- Decisión: policy engine (OPA) evalúa y responde allow/deny with reasons.

Eventing DM X4:
- Outbox pattern: persistencia transaccional → drenar bus → confirmación → limpiar outbox.
- Idempotencia: set persistente de eventos procesados.
- DLQ: alertas automáticas si depth > threshold.

Escrow y disputas (Trueque):
- Match: doble confirmación → iniciar escrow.
- Disputa: generación de AuditBundle con evidencias, asignación de mediador, posible ATIF (arbitraje transfronterizo) si jurisdicciones cruzadas.
- Resolución: publicar DecisionRecord y actualizar estados.

DreamSpaces QA automático:
- Checks: latencia, FPS, accesibilidad, peso de assets, LOD recommendation.
- Resultado: aprobar | sugerir LOD | bloquear.

Seguridad, privacidad y cumplimiento
-----------------------------------
- Identidad: DID issuance, passkeys/WebAuthn, ZK proofs opcionales, biometría cancelable on‑device.
- Consentimiento: consent ledger granular, revocable; export PDF/QR con BookPI anchor.
- Criptografía: mTLS intra‑mesh, PQC (Kyber/Dilithium) para rutas críticas, HSM/KMS con rotación y Shamir emergency scheme.
- Zero‑Trust: OPA/Gatekeeper, políticas de pod estrictas, no privileged containers, resource limits, sin hostPath.
- WAF y DDoS protection: reglas gestionadas + custom rules.
- SBOM (CycloneDX), ModelAudit para modelos IA, anchoring de artefactos y decision records en BookPI.

Observabilidad, SLOs y métricas
------------------------------
- Trazas: OTEL con correlation IDs; collector → Tempo/OTLP.
- Logs: JSON estructurado → Loki; flujo de clasificación.
- Métricas: Prometheus; p95/p99, error rate, DLQ depth, GPU utilization, HPA metrics.
- Dashboards: Grafana por servicio y por equipo (gateway, dm x4, isabella, XR).
- SLOs propuestos:
  - Gateway p95 < 300 ms
  - Error rate < 0.3% (5 min window)
  - Live ingest (edge) RTT < 100–120 ms
  - BookPI UI ack < 3 s
  - Rollback crítico < 60 s

CI/CD, repositorio y despliegue
-------------------------------
Estructura monorepo (recomendada):
- apps/ (web SSR, studio)
- services/ (gateway, identity, dm x4, isabella, notifications)
- domains/ (catalog, trueque, memberships)
- packages/ (ui, sdk, telemetry)
- infra/ (terraform, helm, ci)
- docs/ (MASTER_DOCUMENTO, ADRs, runbooks)
- ops/ (dashboards, runbooks, scripts)

Pipelines CI/CD:
- Steps: lint → typecheck → unit → integration → visual regression → build images → SBOM → sign → push → helm chart → canary deploy gates (SLOs, security).
- Release: SemVer, changelogs automáticos, BookPI anchor de release artifacts.
- Canary: 10% → 25% → 50% → 100% por weights; rollback automático si SLOs degradados.
- GitOps: ArgoCD por entorno; values y secrets gestionados por Vault/KMS.

Runbooks y scripts operativos
-----------------------------
Runbook — incident response (SEV1–SEV3):
1. Detect: alerta (p95, error rate, DLQ).
2. Triage: asignar oncall, raiz probable.
3. Contain: rate limit, toggle feature flag, dirigir tráfico a stable.
4. Mitigate: patch/rollback, hotfix.
5. Recover: validar integridad, publicar AuditBundle de incidente.
6. Postmortem: blameless, actualizar ADR.

Runbook — audit & release:
- Pre: freeze, export SBOM, preparar AuditBundles.
- Durante: auditor interno/externo EOCT review.
- Post: publicar resumen en Trust Center.

Scripts operativos (ejemplos):
- scripts/pi-check.sh — Escaneo PI y FTO score, genera evidencia y sube a BookPI.
- scripts/publish-bookpi.sh — Firmar AuditBundle con HSM → pin IPFS → anchor on‑chain → retorna {cid, txId, doi}.
- scripts/openapi-diff.sh — Comparar OpenAPI entre versiones.
- scripts/canary-weights.sh — Ajustar ALB/Nginx weights.
- scripts/rotate-keys.sh — Rotación de claves/KMS/HSM.
- scripts/drain-dlq.sh — Drenar DLQ con registro en BookPI.

Catálogo detallado de UI / Frontends
-----------------------------------
- EdgeHero: hero video + overlay + TrustBadge.
- ImmersiveCarousel: previews GLTF.
- ReelFeed: scroll vertical, autoplay mute.
- LiveStage: panel AV, cohost, gifts.
- ProfileHero: avatar, métricas, badges.
- EvidenceModal: resumen DecisionRecord / AuditBundle (sin PII).

Governance & Economía
---------------------
- Economía: split 75/25 (creador/plataforma), TAMV Credits, subastas y marketplace.
- DAO & Meta‑gobernanza: proposals, simulations, enactment flows; BookPI anchors y audit trails para votaciones.
- Kórima Codex: memoria de reformas, políticas, precedentes y jurisprudencia interna.

Checklist de producción y validación
-----------------------------------
- Identidad y acceso: passkeys/OIDC, ABAC activo.
- Datos y contratos: migraciones aplicadas, OpenAPI/SDK sincronizados.
- Observabilidad: dashboards verdes, alertas configuradas.
- Seguridad/compliance: OPA/Gatekeeper aplicado, WAF activo, SBOM firmado y anchored.
- Canary/rollback: prueba de canary y rollback documentada.
- Gobernanza/transparencia: Trust Center, Model Risk, Kórima Codex publicados.

Siguientes pasos accionables (inmediatos)
----------------------------------------
1. Inventario automático/manual de KnowledgeCells en los repos listados → generar cells/_index.json.
2. Crear repo `tamv-standards` con este MASTER_DOCUMENTO, plantillas (TEMPLATE_KNOWLEDGECELL.md), CI starter y chart Helm base.
3. Seleccionar 2–3 células MVP: render-3d-holocube, render-4d-hypercube, id‑nvida → crear starter PRs en cada repo con scaffold.
4. Definir OpenAPI completas para gateway y identity; generar SDKs y tests contract.
5. Provisionar staging k8s + ArgoCD + OTEL collector + BookPI anchor demo.

Apéndice A — Diagrama de alto nivel (ASCII)
Client(WebXR) ---> API Gateway ---> Orchestrator (Isabella) ---> [Cell A] ---> Storage
                                          |-> [Cell B]
                                          |-> Ledger (Hyperledger / anchor)
                                          |-> DM X4 Bus

Apéndice B — JSON Schema (KnowledgeCell, resumen)
{
  "type":"object",
  "properties":{
    "id":{"type":"string"},
    "type":{"type":"string"},
    "version":{"type":"string"},
    "description":{"type":"string"},
    "dependencies":{"type":"array","items":{"type":"string"}},
    "inputFormat":{"type":"string"},
    "outputFormat":{"type":"string"},
    "apiEndpoint":{"type":"string"},
    "microserviceUrl":{"type":"string"},
    "testCases":{"type":"array","items":{"type":"string"}}
  },
  "required":["id","type","version","apiEndpoint","microserviceUrl"]
}

Apéndice C — Decisiones técnicas (resumen)
- Backend: Node.js + TypeScript (NestJS/Fastify). ML/cuántica: Python (PyTorch, Qiskit).
- Infra: Kubernetes + Helm + ArgoCD + Istio/Cilium.
- Ledger: Hyperledger Fabric (permissioned).
- Licencia: Apache‑2.0 (con CLA/DCO).

Whitepaper TAMV Blockchain MSR — síntesis incluida
-------------------------------------------------
(Se incorpora aquí el índice y se anexan los primeros capítulos del Whitepaper MSR; seguir desarrollo en docs/whitepaper.)

0. Portada y contexto editorial  
1. Resumen ejecutivo — Propósito, problema central, propuesta de valor y casos de uso.  
2. Visión general de TAMV y su contexto — Identidad, gobernanza híbrida y economía civilizatoria.  
3. Problema — trazabilidad y confianza en cadenas de suministro, enfoque LATAM/Caribe.  
4. Enfoque de diseño — Principios civilizatorios aplicados: transparencia, reparabilidad, soberanía.  
5. Definición técnica de MSR — Red permissioned, actores, interoperabilidad, guardianía.  
(Ver carpeta docs/whitepaper para el contenido expandido y plantillas legales.)

Conclusión
----------
TAMV Knowledge consolida todo el ecosistema: arquitecturas, contratos, endpoints, algoritmos EOCT, seguridad, runbooks y el whitepaper MSR. El sistema está preparado para transformarse en documentación viva, plantillas operativas y PRs iniciales que conecten la especificación con el código de los repos existentes.

Entregables disponibles (si lo deseas ahora)
---------------------------------------------
- Versión exportable en Markdown/Docs lista para monorepo/Wiki (este archivo).
- Listado JSON de elementos (cells/_index.json) para indexar en el Studio.
- Roadmap técnico con PRs y tareas (issues) para conectar la Knowledge con artefactos (OpenAPI, Storybook, pipelines).
- Template de OpenAPI y Zod schemas base.

Notas finales
-------------
Este documento está concebido como fuente viva: cada release debe acompañarse de un AuditBundle y anclaje BookPI. Puedo ahora:
- Generar el JSON index de KnowledgeCells a partir del inventario de tus repos.
- Crear el repo `tamv-standards` con plantillas y CI starter y abrir PRs.
- Producción de OpenAPI v1 para Gateway + Identity (esqueleto automático).

Indica qué acción prioridad deseas que ejecute primero y si quieres que genere ya los artefactos (JSON, PRs, OpenAPI) para comenzar a integrar en los repos.